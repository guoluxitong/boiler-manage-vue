export const coms_media={
    0:'热水',
    1:'蒸汽',
    2:'导热油',
    3:'热风',
    4:'真空',
}
export const coms_power={
    0:'油气',
    1:'电',
    2:'煤',
    3:'生物质',
    30:'余热'
}
export const coms_level={
    0:'缺水',
    1:'低报警',
    2:'低位',
    3:'正常',
    4:'高位',
    5:'超高位',
    6:'逻辑错'
}
export const coms_open_close={
    0:'关',
    1:'开'
}
export const coms_start_stop={
    0:'停',
    1:'启',
}
export const media={
    ReShui:0,
    ZhengQi:1,
    DaoReYou:2,
    ReFeng:3,
    ZhenKong:4
}
export const power={
    YouQi:0,
    Dian:1,
    Mei:2,
    ShengWuZhi:3,
    YuRe:30
}

export const plc_common_valueMap={
    coms_status:{
        0:'待命',
        1:'运行',
        2:'报警'
    },
    coms_atuo:{
        0:'自',
        1:'手',
    },
    coms_ranshaoqi_status:{
        0:'停止',
        1:'运行',
        2:'大火',
    }
}
export const ctl_njzj_common_valueMap={
    coms_status:{
        0:'关机',
        1:'待机',
        2:'运行',
        3:'报警',
    },
    coms_ranshaoqi_status:{
        0:'停',
        1:'小火',
        2:'大火',
    },
    coms_yalistatus:{
        0:'常压',
        1:'低压',
        2:'中压',
        3:'高压',
        4:'超压',
    },
    coms_device:{
        0xC0:"手",
        0x3F:"自",
        0x30:"备",
        0xCF:"主",
        0x0F:"启",
        0xF0:"停"
    }
}
export const ctl_njrt_common_valueMap={
    coms_status:{
        0:'待机',
        1:'报警',
        2:'运行',
        3:'关机'
    },
    coms_atuo:{
        0:'手',
        1:'自'
    },
    coms_master:{
        0:"主",
        1:"备"
    },
    coms_ranshaoqi_status:{
        0:'小火',
        1:'大火'
    },
    coms_zhuangtai:{
        0: "待命",
        1: "报警",
        2: "定时",
        3: "启1",
        4: "停1",
        5: "启2",
        6: "停2",
        7: "启3",
        8: "停3",
        9: "启4",
        10: "停4",
        11: "防冻"
    },
    coms_moshi:{
        0: "模式一",
        1: "模式二",
        2: "模式三"        
    },
    coms_yuyan:{
        1: "中文",
        2: "英文"        
    }
}


