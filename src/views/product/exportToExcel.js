/* eslint-disable */
require('script-loader!file-saver');
require('script-loader!@/export/Blob');
import XLSX from 'js-xlsx'

function datenum(v, date1904) {
    if (date1904) v += 1462;
    let epoch = Date.parse(v);
    return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
}

function sheet_from_array_of_arrays(data, opts) {
    let ws = {};
    const borderAll = {  //单元格外侧框线
        top: {
            style: 'thin'
        },
        bottom: {
            style: 'thin'
        },
        left: {
            style: 'thin'
        },
        right: {
            style: 'thin'
        }
    };
    let range = {
        s: {
            c: 10000000,
            r: 10000000
        },
        e: {
            c: 0,
            r: 0
        }
    };
    for (let R = 0; R != data.length; ++R) {
        for (let C = 0; C != data[R].length; ++C) {
            if (range.s.r > R) range.s.r = R;
            if (range.s.c > C) range.s.c = C;
            if (range.e.r < R) range.e.r = R;
            if (range.e.c < C) range.e.c = C;
            if(R==0){
                ws['!merges']=[{
                    s: {c: 0,r: 0},
                    e: {c: data[R].length-1,r: 0}
                }]
                ws[XLSX.utils.encode_cell({c: 0,r: 0})]= {
                    v: data[0][0],
                    t: 's',
                    s:{
                        font: {
                            sz: 14,                //18号字体
                            bold: true             //加粗
                        },
                        alignment: {
                            horizontal: 'center'   //水平居中对其
                        }
                    }
                }
                if(C==data[R].length-1){
                    ws[XLSX.utils.encode_cell({c: data[R].length-1,r: 0})]= {
                        s:{
                            border: {
                                right: {
                                    style: 'thin'
                                }
                            }
                        }
                    }
                }
            }else{
                let value=data[R][C]||""
                let cell = {
                    v: value,
                    s:{
                        border: borderAll
                    }
                };
                if(R==1){
                    cell.s.alignment={
                        horizontal: 'center'   //水平居中对其
                    }
                    cell.s.font={
                        bold: true             //加粗
                    }
                }
                let cell_ref = XLSX.utils.encode_cell({
                    c: C,
                    r: R
                });
                if (typeof cell.v === 'number') cell.t = 'n';
                else if (typeof cell.v === 'boolean') cell.t = 'b';
                else if (cell.v instanceof Date) {
                    cell.t = 'n';
                    cell.z = XLSX.SSF._table[14];
                    cell.v = datenum(cell.v);
                } else cell.t = 's';
                ws[cell_ref] = cell;
            }
        }
    }
    if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
    return ws;
}

function Workbook() {
    if (!(this instanceof Workbook)) return new Workbook();
    this.SheetNames = [];
    this.Sheets = {};
}
function s2ab(s) {
    let buf = new ArrayBuffer(s.length);
    let view = new Uint8Array(buf);
    for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}
export function export_json_to_excel(fileName,excelObjArray) {
    let wb = new Workbook()
    excelObjArray.forEach(excelObj=>{
        let data=[[excelObj.title,...Array(excelObj.header.length-1)],[...excelObj.header],...excelObj.data]
        let ws = sheet_from_array_of_arrays(data);
        /*设置worksheet每列的最大宽度*/
        let colWidth = data.map(row => row.map(val => {
            /*先判断是否为null/undefined*/
            if (val == null) {
                return {
                    'wch': 10
                };
            }
            /*再判断是否为中文*/
            else if (val.toString().charCodeAt(0) > 255) {
                return {
                    'wch': val.toString().length * 2
                };
            } else {
                return {
                    'wch': val.toString().length
                };
            }
        }))
        /*以第一行为初始值*/
        let result = colWidth[1];
        for (let i = 2; i < colWidth.length; i++) {
            for (let j = 0; j < colWidth[i].length; j++) {
                if (result[j]['wch'] < colWidth[i][j]['wch']) {
                    result[j]['wch'] = colWidth[i][j]['wch'];
                }
            }
        }
        ws['!cols'] = result;
        /* add worksheet to workbook */
        wb.SheetNames.push(excelObj.title);
        wb.Sheets[excelObj.title] = ws;
    })
    let wbout = XLSX.write(wb, {
        bookType: 'xlsx',
        bookSST: false,
        type: 'binary'
    });
    saveAs(new Blob([s2ab(wbout)], {
        type: "application/octet-stream"
    }), fileName + ".xlsx");
}
