var sendInp = document.getElementById('send-inp');
var sendBtn = document.getElementById('send-btn');
sendInp.onkeyup = function (e) {
    // 键盘的enter
    if(e.which == 13) {
        // 
        sendBtn.click();
    }
}
sendBtn.onclick = function () {
    var val = sendInp.value.trim();
    if (val) {
        renderDom('mine', val);
        sendInp.value = '';
        getData(val);
    }
}

// 发送请求函数
function getData(val) {
    ajax({
        url: 'http://localhost:3000/chat',
        // url: 'https://developer.duyiedu.com/edu/turing/chat',
        type: 'get',
        data: 'text=' + val,
        success: function (res) {
           renderDom('robot', res.text);
        }
    })
}


// 渲染内容区
function renderDom(className, text) {
    var oDiv = document.createElement('div');
    oDiv.className = 'clearfix ' + className;
    oDiv.innerHTML = `  <div class="avator"></div>
    <div class="text">${text}</div>`;
    var content = document.querySelector('.content');
    content.appendChild(oDiv);
    // console.log(content, content.scrollHeight);
    // content.scrollTo(0, content.scrollHeight)
    // scrollHeight 表示的是在没有滚动条的时候 该区域如果被内容区撑开的高度
    content.scrollTop = content.scrollHeight - content.clientHeight;
}

// clientHeight  offsetHeight

// 127.0.0.1  localhost   
// 127.0.0.1  aaaa