var myData = {
    education:[
        '北一女中 畢業',
        '中正資工 畢業'
    ],
    contact:[
        '0984200235',
        'clairechiu1997@gmail.com'
    ],
    projects:[{
            name: '利用DP實作支援模糊搜尋的搜尋網站', 
            description: [{
                    topic: '模糊搜尋', 
                    description: '利用DP計算best distance error, 並以變數控制比較字數, 縮短搜尋時間。'
                }, {
                    topic: '依據字串權重與關聯性顯示結果',
                    description: ''
                }
            ]
        }, {
            name: '以機器人與超聲波感測器建構環境地圖', 
            description: [{
                    topic: '超聲波測量牆壁夾角 (誤差小於3%)', 
                    description: '在車上裝設兩顆超聲波, 並用伺服馬達控制超聲波旋轉, 量測出自走車和牆壁兩邊的最短位置, 計算出牆壁夾角。'
                }, {
                    topic: '車子定位 (誤差小於9%)',
                    description: '利用輪子上的編碼器, 求得車子的移動速度與角速度, 並對時間作積分, 求得車子的座標值和方向。'
                }, {
                    topic: '改善車子偏移狀況',
                    description: '利用車子當前座標與方向, 及時改變車子左右輪的速度讓車子能夠在預期路徑上行走'
                }, {
                    topic: '周遭環境的資訊建構',
                    description: '利用超聲波的環境資訊, 以及車子座標, 計算出障礙物座標值。'
                }
            ]
        }, {
            name: '暢銷書關鍵字對股市、債券及基金的交易量與報酬關聯',
            description: [{
                    topic: '資料蒐集',
                    description: '利用Python爬金石堂網站原始碼, 再擷取財經分類每週暢銷書前100名的書名與摘要'
                }, {
                    topic: '資料處理',
                    description: '建立財經相關專有名詞的自訂義辭典, 並利用Jieba來斷詞'
                }, {
                    topic: '關聯性分析',
                    description: '分別取每周關鍵字次數最多的15個關鍵字與目標變數的漲跌關係'
                }, {
                    topic: '回歸分析',
                    description: '分析關鍵字出現的次數, 與目標變數的關係, 並分析往前拉一週、往後拉一週、與當週的時間資料結果'
                }
            ]
        }
    ],
    experiences:[{
            field: 'Basic Software',
            skills: [{
                name: 'C / C++',
                description: '實作Linux shell、搜尋引擎、各類演算法與資料結構' 
            }, {
                name: 'Compiler',
                description: '以ANTLR實作Compiler,產生MIPS Code'
            }]
        }, {
            field: 'Machine Learning',
            skills: [{
                name: 'Feature Matching',
                description: '實作RootSIFT、FAST detector、ORB descriptor等，並比較優劣'
            }, {
                name: 'Kaggle: 房價預測',
                description: '分析房子各參數對房價的相關係數, 結果達到前1/3'
            }, {
                name: '利用RNN實作數字辨識',
                description: ''
            }, {
                name: '利用matlab實作PCA,用來作人臉辨識',
                description: ''
            }]
        }, {
            field: 'Web Development',
            skills: [{
                name: '利用MySQL建立資料庫,並設計搜尋指令',
                description: ''
            }, {
                name: 'Asp.Net / Asp.Net Core',
                description: '用C#寫網頁後端；JQuery、html寫前端，用MVC架構開發'
            }, {
                name: 'Vue',
                description: ''
            }]
        }, {
            field: 'Firmware Development',
            skills: [{
                name: 'NI Single-Board RIO',
                description: '在NI自走車上開發'
            }, {
                name: 'ZedBoard',
                description: '以Verilog寫, 讓板子可以實作四則運算'
            }, {
                name: 'Nexys-4 DDR FPGA',
                description: '以Verilog寫, 讓板子可以執行MIPS指令'
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