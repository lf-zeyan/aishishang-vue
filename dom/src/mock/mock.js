import Mock from 'mockjs'

let data = [
    {
        "result": "ok",
        "page": 1,
        "count": 12,
        "total": 32,
        "goodList": [
            {
                "id": "1001",
                'num':1,
                "pic": "http:\/\/www.yantianfeng.com\/static\/images\/api\/goodList\/pics_small\/good_1.jpg",
                "price": 278,
                "isFreePost": true,
                "buyCount": 262,
                "name": "水墨青华2017夏装新款女装气质时尚通勤短袖修身中长款印花连衣裙",
                "shopId": "shop_001",
                "shop": "韩都衣舍旗舰店",
                "property": [
                    "面料: 雪纺",
                    "裙型: A字裙",
                    "袖长: 短袖",
                    "领型: 圆领",
                    "腰型: 高腰"
                ],
                "address": "广东 深圳",
                "detailLink": "\/\/detail.tmall.com\/item.htm?spm=a230r.1.14.77.ebb2eb2jQm5ak&id=532891302479&ns=1&abbucket=6"
            },
            {
                "id": "1002",
                'num':1,
                "pic": "http:\/\/www.yantianfeng.com\/static\/images\/api\/goodList\/pics_small\/good_2.jpg",
                "price": 386,
                "isFreePost": true,
                "buyCount": 1192,
                "name": "韩版修身显瘦中长款真丝连衣裙2017夏装新款桑蚕丝印花大摆沙滩裙",
                "shopId": "shop_001",
                "shop": "韩都衣舍旗舰店",
                "property": [
                    "面料: 雪纺",
                    "裙型: A字裙",
                    "袖长: 短袖",
                    "领型: 圆领",
                    "腰型: 高腰"
                ],
                "address": "浙江 杭州",
                "detailLink": "\/\/item.taobao.com\/item.htm?spm=a230r.1.14.22.ebb2eb2jQm5ak&id=553249213275&ns=1&abbucket=6#detail"
            },
            {
                "id": "1003",
                'num':1,
                "pic": "http:\/\/www.yantianfeng.com\/static\/images\/api\/goodList\/pics_small\/good_3.jpg",
                "price": 136,
                "isFreePost": true,
                "buyCount": 2710,
                "name": "韩都衣舍2017夏新款韩版网纱小清新假两件中长款连衣裙女RW6789瑒",
                "shopId": "shop_001",
                "shop": "韩都衣舍旗舰店",
                "property": [
                    "面料: 雪纺",
                    "裙型: A字裙",
                    "袖长: 短袖",
                    "领型: 圆领",
                    "腰型: 高腰"
                ],
                "address": "山东 济南",
                "detailLink": "\/\/item.taobao.com\/item.htm?spm=a230r.1.14.22.ebb2eb2jQm5ak&id=553249213275&ns=1&abbucket=6#detail"
            },
            {
                "id": "1004",
                'num':1,
                "pic": "http:\/\/www.yantianfeng.com\/static\/images\/api\/goodList\/pics_small\/good_4.jpg",
                "price": 158,
                "isFreePost": true,
                "buyCount": 355,
                "name": "2017夏季新款女装韩版复古chic气质小黑裙子百褶中长款吊带连衣裙",
                "shopId": "shop_002",
                "shop": "丽人家beauty",
                "property": [
                    "面料: 雪纺",
                    "裙型: A字裙",
                    "袖长: 短袖",
                    "领型: 圆领",
                    "腰型: 高腰"
                ],
                "address": "广东 东莞",
                "detailLink": "\/\/item.taobao.com\/item.htm?spm=a230r.1.14.22.ebb2eb2jQm5ak&id=553249213275&ns=1&abbucket=6#detail"
            },
            {
                "id": "1005",
                'num':1,
                "pic": "http:\/\/www.yantianfeng.com\/static\/images\/api\/goodList\/pics_small\/good_5.jpg",
                "price": 168,
                "isFreePost": true,
                "buyCount": 147,
                "name": "2017夏季新款女装韩版气质修身碎花裙子中长款印花雪纺连衣裙女夏",
                "shopId": "shop_002",
                "shop": "丽人家beauty",
                "property": [
                    "面料: 雪纺",
                    "裙型: A字裙",
                    "袖长: 短袖",
                    "领型: 圆领",
                    "腰型: 高腰"
                ],
                "address": "浙江 杭州",
                "detailLink": "\/\/item.taobao.com\/item.htm?spm=a230r.1.14.22.ebb2eb2jQm5ak&id=553249213275&ns=1&abbucket=6#detail"
            },
            {
                "id": "1006",
                'num':1,
                "pic": "http:\/\/www.yantianfeng.com\/static\/images\/api\/goodList\/pics_small\/good_6.jpg",
                "price": 148,
                "isFreePost": true,
                "buyCount": 3578,
                "name": "粉色无袖雪纺连衣裙中长款2017夏季新款女装韩版时尚修身裙子长裙",
                "shopId": "shop_002",
                "shop": "丽人家beauty",
                "property": [
                    "面料: 雪纺",
                    "裙型: A字裙",
                    "袖长: 短袖",
                    "领型: 圆领",
                    "腰型: 高腰"
                ],
                "address": "浙江 杭州",
                "detailLink": "\/\/item.taobao.com\/item.htm?spm=a230r.1.14.22.ebb2eb2jQm5ak&id=553249213275&ns=1&abbucket=6#detail"
            },
            {
                "id": "1007",
                'num':1,
                "pic": "http:\/\/www.yantianfeng.com\/static\/images\/api\/goodList\/pics_small\/good_7.jpg",
                "price": 29,
                "isFreePost": true,
                "buyCount": 4766,
                "name": "无袖娃娃裙大码女装棉麻韩版宽松高腰圆领背心裙亚麻连衣裙女夏季",
                "shopId": "shop_002",
                "shop": "丽人家beauty",
                "property": [
                    "面料: 雪纺",
                    "裙型: A字裙",
                    "袖长: 短袖",
                    "领型: 圆领",
                    "腰型: 高腰"
                ],
                "address": "广东 广州",
                "detailLink": "\/\/item.taobao.com\/item.htm?spm=a230r.1.14.22.ebb2eb2jQm5ak&id=553249213275&ns=1&abbucket=6#detail"
            },
            {
                "id": "1008",
                'num':1,
                "pic": "http:\/\/www.yantianfeng.com\/static\/images\/api\/goodList\/pics_small\/good_8.jpg",
                "price": 58,
                "isFreePost": true,
                "buyCount": 2132,
                "name": "2017夏装新款裙子棉绸中老年女装印花连衣裙妈妈装加大码短袖长裙",
                "shopId": "shop_003",
                "shop": "茹淘服饰专营店",
                "property": [
                    "面料: 雪纺",
                    "裙型: A字裙",
                    "袖长: 短袖",
                    "领型: 圆领",
                    "腰型: 高腰"
                ],
                "address": "北京",
                "detailLink": "\/\/item.taobao.com\/item.htm?spm=a230r.1.14.22.ebb2eb2jQm5ak&id=553249213275&ns=1&abbucket=6#detail"
            },
            {
                "id": "1009",
                'num':1,
                "pic": "http:\/\/www.yantianfeng.com\/static\/images\/api\/goodList\/pics_small\/good_9.jpg",
                "price": 89,
                "isFreePost": true,
                "buyCount": 1212,
                "name": "2017夏季新款韩版女装雪纺无袖白色连衣裙夏修身显瘦打底a字裙子",
                "shopId": "shop_003",
                "shop": "茹淘服饰专营店",
                "property": [
                    "面料: 雪纺",
                    "裙型: A字裙",
                    "袖长: 短袖",
                    "领型: 圆领",
                    "腰型: 高腰"
                ],
                "address": "浙江 杭州",
                "detailLink": "\/\/item.taobao.com\/item.htm?spm=a230r.1.14.22.ebb2eb2jQm5ak&id=553249213275&ns=1&abbucket=6#detail"
            },
            {
                "id": "1010",
                'num':1,
                "pic": "http:\/\/www.yantianfeng.com\/static\/images\/api\/goodList\/pics_small\/good_10.jpg",
                "price": 29.9,
                "isFreePost": true,
                "buyCount": 8736,
                "name": "夏季2017新款小清新露肩雪纺连衣裙夏女装韩版显瘦气质a字裙子",
                "shopId": "shop_003",
                "shop": "茹淘服饰专营店",
                "property": [
                    "面料: 雪纺",
                    "裙型: A字裙",
                    "袖长: 短袖",
                    "领型: 圆领",
                    "腰型: 高腰"
                ],
                "address": "浙江 杭州",
                "detailLink": "\/\/item.taobao.com\/item.htm?spm=a230r.1.14.22.ebb2eb2jQm5ak&id=553249213275&ns=1&abbucket=6#detail"
            },
            {
                "id": "1011",
                'num':1,
                "pic": "http:\/\/www.yantianfeng.com\/static\/images\/api\/goodList\/pics_small\/good_11.jpg",
                "price": 138,
                "isFreePost": true,
                "buyCount": 3998,
                "name": "2017新款女装夏季雪纺连衣裙韩版收腰显瘦气质荷叶边系带印花中裙",
                "shopId": "shop_003",
                "shop": "茹淘服饰专营店",
                "property": [
                    "面料: 雪纺",
                    "裙型: A字裙",
                    "袖长: 短袖",
                    "领型: 圆领",
                    "腰型: 高腰"
                ],
                "address": "浙江 杭州",
                "detailLink": "\/\/item.taobao.com\/item.htm?spm=a230r.1.14.22.ebb2eb2jQm5ak&id=553249213275&ns=1&abbucket=6#detail"
            },
            {
                "id": "1012",
                'num':1,
                "pic": "http:\/\/www.yantianfeng.com\/static\/images\/api\/goodList\/pics_small\/good_12.jpg",
                "price": 79.9,
                "isFreePost": true,
                "buyCount": 5921,
                "name": "歌兔连衣裙雪纺夏季长裙修身2017新款女装显瘦碎花小清新裙子夏女",
                "shopId": "shop_003",
                "shop": "茹淘服饰专营店",
                "property": [
                    "面料: 雪纺",
                    "裙型: A字裙",
                    "袖长: 短袖",
                    "领型: 圆领",
                    "腰型: 高腰"
                ],
                "address": "浙江 杭州",
                "detailLink": "\/\/item.taobao.com\/item.htm?spm=a230r.1.14.22.ebb2eb2jQm5ak&id=553249213275&ns=1&abbucket=6#detail"
            }
        ]
    }
]

Mock.mock('/getData',()=>{
    return data
})
