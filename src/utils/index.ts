/*
 * @Author: wujia
 * @Email: wujia8@jd.comm
 * @Date: 2021-10-25 14:32:17
 * @Description: 通用业务函数封装
 */
import Taro from '@tarojs/taro'
// import envConfig from '@/env.config'
// import envConfig from '@/env.js'


/**
 * 获取当前页Url
 * @returns string
 */
export const getCurrentPageUrl = () => {
    const pages = Taro.getCurrentPages()
    const currentPage = pages[pages.length - 1]
    return currentPage.route
}

/**
 * 获取当前路由参数
 * @returns
 */
export function getCurrentPageParams() {
    // const router = useRouter() // import {userRouter} from 'vue-router'
    const { router } = Taro.getCurrentInstance()
    return {
        ...router?.params,
    }
}

/**
 * 页面跳转
 * @param pagePath 页面地址
 * @param options 页面参数, 顺序:params<object>, method<string>
 * example1: pageJump('/pages/index/index', 'navigateTo')
 * example2: pageJump('/pages/index/index', {a:1, b:'2'}, 'navigateTo')
 * example3: pageJump('/pages/index/index?a=1', {b:'3'}, 'navigateTo')
 */
export const pageJump = (pagePath, ...options) => {
    let [params, method = 'navigateTo'] = options
    // 参数必须使用Object传入
    // 如果第二个参数为string，则认为是method调用
    if (typeof params === 'string' && !!params) {
        method = params
        params = null
    }

    // params 序列化
    let paramString = ''
    if (params && Object.keys(params).length) {
        const paramArr: string[] = []
        let key, value
        for ([key, value] of Object.entries(params)) {
            paramArr.push(`${key}=${value}`)
        }
        paramString = paramArr.join('&')
    }

    let url = ''
    // pagepath 中是否包含 ?
    const query = pagePath.includes('?')
    const [path, ...rest] = pagePath.split('?')
    if (query && `${rest}`.length > 0) {
        url = `${path}?${rest}&${paramString}`
    } else {
        url = paramString ? `${path}?${paramString}` : path
    }
    const isTabPagePath = ([]).includes(pagePath)
    console.log( pagePath, isTabPagePath)
    isTabPagePath && method !== 'reLaunch' ? Taro.switchTab({ url }) : Taro[method]({ url })
}

/**
 * 页面回跳
 * @param options
 */
export const pageBack = function (delta = 1) {
    Taro.navigateBack({
        delta,
    })
}

// 显示toast提示
export const showToast = function (message, options = {}) {
    Taro.showToast({
        title: message,
        icon: 'none',
        mask: true,
        duration: 1800,
        ...options,
    })
}

// 显示加载
export const showLoading = function (message, options = {}) {
    Taro.showLoading({
        title: message,
        mask: true,
        ...options,
    })
}

// 关闭加载
export const hideLoading = function (options = {}) {
    return Taro.hideLoading({
        ...options,
    })
}

// getStorage
export const getStorageInfo = (key = '') => {
    if (process.env.TARO_ENV === 'h5') {
        return window.localStorage.getItem(key)
    }
    return Taro.getStorageSync(key)
}

// setStorage
export const setStorage = (key, value) => {
    Taro.setStorageSync(key, value)
}

// removeStorage
export const removeStorage = key => {
    Taro.removeStorageSync(key)
}

// clearStorage
export const clearStorage = () => {
    Taro.clearStorageSync()
}

// 文件预览
export const filePreview = url => {
    Taro.downloadFile({
        url: url + '?t=' + new Date().getTime,
        success: function (res) {
            const filePath = res.tempFilePath
            Taro.openDocument({
                filePath: filePath,
                success: function () {
                    console.log('打开成功')
                },
            })
        },
    })
}

/**
 * url 参数转换
 * @param url
 * @returns
 */
export function webParseURL(url) {
    return url
        .slice(url.indexOf('?') + 1)
        .split('&')
        .reduce((prev, curr) => {
            const [key, val] = curr.split('=')
            if (!val) return prev // val 为空情况
            prev[key] = val
            return prev
        }, {})
}

/**
 * 数字转换
 * @param num
 * @returns
 */
export const toThousands = num => {
    const content: string = (num || 0).toString()
    let full = ''
    let decimals = ''
    let result = ''
    full = content.split('.')[0] || ''
    decimals = content.split('.')[1] || ''
    while (full.length > 3) {
        result = ',' + full.slice(-3) + result
        full = full.slice(0, full.length - 3)
    }
    result = full + result
    if (decimals) {
        result = result + '.' + decimals
    }
    return result
}

/**
 * 上传图片
 * @param url String http开头，上传至服务度端地址
 * @returns Promise
 */
// wx.uploadFile
// export const upload = (
//     url,
//     params = {},
//     file,
//     name = 'imgContent'
//     // returnType = 'navigate',
//     // returnUrl
// ) => {
//     return new Promise((resolve, reject) => {
//         url = envConfig.baseUrl + url
//         Taro.uploadFile({
//             url,
//             filePath: file,
//             name,
//             formData: params,
//             header: Object.assign({
//                 'content-type': 'multipart/form-data',
//             }),

//             success(res) {
//                 console.log('upload', res)
//                 try {
//                     const { code, msg, data } = JSON.parse(res.data)
//                     if (code === '200') {
//                         // 成功
//                         resolve(data)
//                     } else {
//                         showToast(msg || '')
//                         reject(msg)
//                     }
//                 } catch (error) {
//                     console.log('upload error:', error)
//                 }
               
//             },
//             fail() {
//                 showToast('网络异常，请稍后再试')
//                 reject('网络异常，请稍后再试')
//             },
//         })
//     })
// }

/**
 * 选择图片
 * @param count Number 允许选择图片数量
 * @returns result: Object
 */
// wx.chooseImage(Object object)
export const chooseImage = async count => {
    let result = {}

    await Taro.chooseImage({
        count,
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
        success(res) {
            result = res
        },
        fail(error) {
            console.log('选择图片error', error)
        },
    })
    return result
}

// 时间格式化
export const formatTime = (date, _format) => {
    if (!date) {
        return null
    }
    if (typeof date === 'string' && date.indexOf('T') === -1) {
        date = date.replace(/-/g, '/')
    }
    const t = new Date(date)
    const format = _format || 'yyyy-MM-dd HH:dd:ss'
    const tf = function (i) {
        return (i < 10 ? '0' : '') + i
    }
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
        switch (a) {
        case 'yyyy':
            return tf(t.getFullYear())
        case 'MM':
            return tf(t.getMonth() + 1)
        case 'mm':
            return tf(t.getMinutes())
        case 'dd':
            return tf(t.getDate())
        case 'HH':
            return tf(t.getHours())
        case 'ss':
            return tf(t.getSeconds())
        default:
            break
        }
    })
}


/**
 * 根据sign转换obj，拼接为字符串(xx=xxx${sign}yy=yyy)
 * @param obj
 * @param sign
 * @returns
 */
export const convertString = (obj = {}, sign = ';') => {
    let str = ''
    for (const key in obj) {
        // if (obj[key]) {
        str = str + key + '=' + obj[key] + sign
        // }
    }
    // 去掉尾部sign
    str = str.slice(0, str.length - 1)
    return str
}

/**
 * 检测是否登录
 * @returns
 */
export const checkLogin = () => {
    return getStorageInfo('token') ? true : false
}

/**
 * 验证手机号
 * @param phoneNumber
 * @returns
 */
export const validatePhone = phoneNumber => {
    if (!/^1[3-9](\d){9}$/.test(phoneNumber)) {
        return false
    }
    return true
}
// 身份证正则
export const certNoValidator = (val: string) => {
    return /^((\d{15})|(\d{18})|(\d{17}[xX]))$/.test(String(val))
}
// 手机号正则
export const phoneValidator = (val: string) => {
    console.log('/^1[3-9]d{9}$/.test(String(val))')
    return /^1[3-9]\d{9}$/.test(String(val))
}
// 校验姓名：只能输入中英文
export const nameValidator = (val: string) => {
    const reg = /^[\u4e00-\u9fa5a-zA-Z]+$/
    return reg.test(val)
}
// 校验地址：不能全为数字或字母
export const addressValidator = (val: string) => {
    const str = val.replace(/(^\s*)|(\s*$)/g, '')
    const len = str.length
    const regNumber = new RegExp(`^\\d{${len}}$`, 'g')
    const regEnglish = new RegExp(`^[a-zA-Z]{${len}}$`, 'g')
    const res = !(regNumber.test(str) || regEnglish.test(str))
    return res
}
export const nameLengthValidator = (val: string) => {
    const str = val.replace(/(^\s*)|(\s*$)/g, '')
    if (str) {
        return str.length >= 2
    }
    return false
}
// 详细地址限制最小字符
export const realAddressLengthValidator = (val: string) => {
    const str = val.replace(/(^\s*)|(\s*$)/g, '')
    if (str) {
        return str.length >= 2
    }
    return false
}

/**
 * 长度校验
 * @param val String 被校验的值
 * @param min Number 最小长度
 * @param val Number 最大长度
 * @returns Boolean
 */
export const lengthValidator = (val: string, min: number, max: number) => {
    console.log('val:String, min, max', val, min, max)
    if (val && min >= 0 && max > min) {
        return val.length > min && val.length < max
    }
    return false
}


// 设置页面title
export const setNavigationBarTitle = title => {
    wx.setNavigationBarTitle({
        title,
    })
}

// 判断url是否为有效：https、http
export const maskInfo = cardMaskNo => {
    if (cardMaskNo.length >= 16) {
        const indexOf = cardMaskNo.length - 4
        let last = ''
        switch (indexOf % 4) {
        case 3:
            last = '*** '
            break
        case 2:
            last = '** '
            break
        case 1:
            last = '* '
            break
        }
        return '**** **** **** ' + last + cardMaskNo.substring(indexOf)
    }
    return cardMaskNo
}

export const dealUrl = (baseUrl, url) => {
    const isHttpUrl = url.startsWith('https://') || url.startsWith('http://') || url.startsWith('//')
    const hasPreFix = url.startsWith('/')
    return isHttpUrl ? url : hasPreFix ? `${baseUrl}${url}` : `${baseUrl}/${url}`
}


/**
 * 微信接口封装位promise，例入：await wxPromise(wx.login)() || wxPromise(wx.login)().then().catch()
 * @param fn
 * @returns promise
 */
export const wxPromise = fn => {
    return function (options: WxApiOptions = {}) {
        return new Promise((resolve, reject) => {
            options.success = function (res) {
                resolve(res)
            }
            options.fail = function (err) {
                reject(err)
            }
            fn(options)
        })
    }
}

// 打电话
export const makePhoneCall = phoneNumber => {
    Taro.makePhoneCall({
        phoneNumber, //仅为示例，并非真实的电话号码
    })
}

// 查看已签署协议

/* 获取系统信息异步版本 */
export const getSystemInfo = () => {
    return new Promise((resolve, reject) => {
        Taro.getSystemInfo({
            success: res => {
                resolve(res)
            },
            fail: err => {
                reject(err)
            },
        })
    })
}

/* 获取系统信息同步版本 */
export const getSystemInfoSync = () => {
    return Taro.getSystemInfoSync()
}

export const getParameterByName = (name, url) => {
    if (!url) return ''
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
    const results = regex.exec(url)
    if (!results) return null
    if (!results[2]) return ''
    return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

export const handleCopy = content => {
    Taro.setClipboardData({
        data: content,
        success: function (res) {
            console.log(res)
        },
    })
}

/**
 * 版本自动更新
 */
export const checkUpdate = () => {
    if (Taro.canIUse('getUpdateManager')) {
        const updateManager = Taro.getUpdateManager()
        updateManager.onCheckForUpdate(res => {
            // console.log('是否有新版本', res)
            if (res.hasUpdate) {
                updateManager.onUpdateReady(() => {
                    Taro.showModal({
                        title: '更新提示',
                        content: '新版本已经准备好，是否重启应用？',
                        success: res => {
                            if (res.confirm) {
                                updateManager.applyUpdate()
                            }
                        },
                    })
                })
                updateManager.onUpdateFailed(() => {
                    Taro.showModal({
                        title: '已经有新版本了哟~',
                        content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~',
                    })
                })
            }
        })
    } else {
        Taro.showModal({
            title: '提示',
            content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。',
        })
    }
}

/**
 * 获取图片信息 & 保存图片到系统相册
 */
const saveImgToPhotosAlbum = (url: string): void => {
    Taro.getImageInfo({
        src: url,
        success: res => {
            const path = res.path
            Taro.saveImageToPhotosAlbum({
                filePath: path,
                success: res => {
                    console.log(res)
                    showToast('图片保存成功')
                },
                fail: res => {
                    console.log(res)
                    showToast('图片保存失败')
                },
            })
        },
        fail: res => {
            console.log(res)
        },
    })
}

/**
 * 获取用户得当前设置 & 提前向用户发起授权请求
 * @param scopeName 需要授权的项名称
 */
export const getAuthorize = (scopeName: string, url: string): void => {
    console.log('入参scopeName', scopeName)
    Taro.getSetting({
        success: res => {
            if (!res.authSetting[`scope.${scopeName}`]) {
                Taro.authorize({
                    scope: `scope.${scopeName}`,
                    success: () => {
                        // 同意授权
                        saveImgToPhotosAlbum(url)
                    },
                    fail: err => {
                        /**
                         * 拉起弹窗（非首次授权情况下）
                         *
                         * 弹窗拒绝授权（首次）
                         *      errMsg: "authorize:fail auth deny"
                         * 之前拒绝过
                         *      errMsg: "authorize:fail 系统错误，错误码：-12006,auth deny"
                         */
                        console.log('弹窗，打开设置', err)
                        // const { errMsg = '' } = err
                        // if (errMsg !== 'authorize:fail auth deny') {
                        Taro.showModal({
                            title: '是否前往打开相册权限',
                            content: '点击确定可前往打开相册权限',
                            success: res => {
                                if (res.confirm) {
                                    // console.log('用户点击确定')
                                    Taro.openSetting({
                                        success(res) {
                                            console.log(res.authSetting)
                                        },
                                    })
                                } else if (res.cancel) {
                                    // console.log('用户点击取消')
                                }
                            },
                        })
                        // }
                    },
                })
            } else {
                // 已经授权了
                console.log('已经授权了')
                saveImgToPhotosAlbum(url)
            }
        },
        fail: error => {
            console.log('获取当前授权信息报错', error)
        },
    })
}
// 查看已签署协议
//下载pdf并查看，已签署的协议
// export const viewPdf = item => {
//     showLoading('加载中...')
//     const { id = '', agreementName = '合同' } = item
//     console.log('点击合同,合同ID=', id)
//     if (!id) {
//         showToast('合同生成中，请稍后查看')
//         return
//     }
//     const token = getStorageInfo('token') || ''
//     const url = `${envConfig.baseUrl}${getSignProtocol}?contractId=${id}&token=${token}`
//     const filePath = `${wx.env.USER_DATA_PATH}/${agreementName}.pdf`
//     Taro.downloadFile({
//         url,
//         filePath,
//         success: res => {
//             const filePath = res.filePath
//             Taro.openDocument({
//                 filePath,
//                 fileType: 'pdf',
//                 success: res => {
//                     console.log('打开文档成功', res)
//                     hideLoading()
//                 },
//                 fail: error => {
//                     showToast('打开文档失败')
//                     console.log('打开文档失败:', error)
//                     hideLoading()
//                 },
//             })
//         },
//         fail: error => {
//             showToast('下载文档出错')
//             console.log('下载文档error', error)
//             hideLoading()
//         },
//     })
// }

// 数组去重
export const uniqueArr = <T> (arr: T[]) => {
    const newArr: T[] = []
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

// 返回一个 SelectorQuery 对象实例
export const createSelectorQuery = () => {
    return Taro.createSelectorQuery()
}

// 判断字符串是否为JSON格式
export const isJSONStr = str => {
    if (typeof str === 'string') {
        try {
            const obj = JSON.parse(str)
            if (typeof obj === 'object' && obj) {
                return true
            } else {
                return false
            }
        } catch (e) {
            console.log('error：' + str + '!!!' + e)
            return false
        }
    }
    console.log('It is not a string!')
}
