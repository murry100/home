chrome.runtime.onInstalled.addListener(function(){
  console.log(11111)
  console.log(chrome.runtime.onUninstall)
});


 
// 启动：用户打开浏览器时，插件会被启动。插件可以在这个阶段初始化数据，设置默认状态等
chrome.runtime.onStartup.addListener(function() {
  console.log(222222)
});
 
// 运行：插件被启动后，就进入了运行阶段。在这个阶段，插件可以响应用户操作，监听和处理浏览器事件，提供各种功能。
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  console.log(33333333)
});
 
// 停止：用户关闭浏览器时，插件会被停止。插件可以监听 onSuspend 事件，保存数据，清理资源等。
chrome.runtime.onSuspend.addListener(function() {
  console.log(4444444)
  alert()
});


chrome.runtime.setUninstallURL("https://your_website.com/uninstall", function() {
  console.log(5555)
});



function captureScreen() {  
  chrome.tabs.query({ active: true, currentWindow: true }).then(res => {
    console.log(res)
    if (res.length === 0) {
      return
    }
    // 获取当前活动的标签页  
    const tab = res[0];
    console.log(tab)
    const url = tab.url;  
    console.log(url)
    if (url.indexOf('https://aws.amazon.com') === -1) {  
      console.log("Not on amazon.com");  
      return;  
    }  
    chrome.tabs.captureVisibleTab(function (image) { 
      console.log(image)
    }); 
    
  })
  
}  


setInterval(captureScreen, 5000);