var myData = {
    education:[
        '北一女中 畢業',
        '中正資工 畢業'
    ],
    contact:[
        '0984200235',
        'clairechiu1997@gmail.com'
    ],
    skill:[{
            topic: 'C / C++',
            description: '實作搜尋引擎、各類演算法與資料結構'
        }, {
            topic: 'Asp.Net / Asp.Net Core',
            description: ''
        }, {
            topic: 'Vue',
            description: ''
        }, {
            topic: 'MySQL',
            description: '建立資料庫、依照需求設計有效率的搜尋指令'
        }
    ],
    projects:[{
            name: '利用DP實作支援模糊搜尋的搜尋網站', 
            description: [{
                    topic: '模糊搜尋', 
                    description: '利用DP計算best distance error,並以變數控制比較字數,縮短搜尋時間。'
                }, {
                    topic: '依據字串權重與關聯性顯示結果',
                    description: ''
                }
            ]
        }, {
            name: '以機器人與超聲波感測器建構環境地圖', 
            description: [{
                    topic: '超聲波測量牆壁夾角 (誤差小於3%)', 
                    description: '在車上裝設兩顆超聲波,並用伺服馬達控制超聲波旋轉,量測出自走車和牆壁兩邊的最短位置,計算出牆壁夾角。'
                }, {
                    topic: '車子定位 (誤差小於9%)',
                    description: '利用輪子上的編碼器,求得車子的移動速度與角速度,並對時間作積分,求得車子的座標值和方向。'
                }, {
                    topic: '改善車子偏移狀況',
                    description: '利用車子當前座標與方向,及時改變車子左右輪的速度讓車子能夠在預期路徑上行走'
                }, {
                    topic: '周遭環境的資訊建構',
                    description: '利用超聲波的環境資訊,以及車子座標,計算出障礙物座標值。'
                }
            ]
        }
    ],
    experience:[{
            field: 'Basic Software',
            works: [{
                name: '以C語言實作Linux shell',
                description: ''
            }, {
                name: '以ANTLR實作Compiler,產生MIPS Code',
                description: ''
            }, {
                name: '利用MySQL建立資料庫,並設計搜尋指令',
                description: ''
            }]
        }, {
            field: 'Machine Learning',
            works: [{
                name: '利用RNN實作數字辨識',
                description: ''
            }, {
                name: '利用matlab實作PCA,用來作人臉辨識',
                description: ''
            }]
        }, {
            field: '',
            works: [{
                name: '',
                description: ''
            }, {
                name: '',
                description: ''
            }]
        }
    ],
    contest:[
        '2018年 中正大學校內程式設計競賽 佳作',
        '2019年 中正大學校內程式設計競賽 佳作',
        '第62次 ITSA線上程式設計競賽 解題數:5題(共5題)'
    ],
    other:[
        '擔任2017年系學會文書長',
        '擔任2017年資工通訊歷史聯合舞會女舞負責人',
        '參加中正熱舞社',
        '資工系羽球隊'
    ]
}

var vm = new Vue({
    el: '#my-resume',
    data: myData
})