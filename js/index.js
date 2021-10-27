new Vue({
  // el:element 要素
  el: '#app',
  // el: '.app'(クラス指定)
  data: {
    // 変数名は基本同じ値を使わないこと。エラーの元になる
    hello: 'Hello World',
    message: 'こんにちは',
    number:3,
    ok: false,
    html:'<h1>h1タグです</h1>',
    url: 'https://google.com',
    attribute: 'href',
    urlTwitter: 'https://twitter.com',
    number: 31,
    twitterObject:{
      href: 'https://twitter.com',
      id: 31,
    },
    countUpNumber: 0,
    x: 0,
    y: 0,
    countUpNumber1: 0,
    x1: 0,
    y1: 0,
    event: 'click',
    countUpEventTestNumber:0,
  },
  // methods(複数形)であることに注意すること
  // methodsは関数の塊ってイメージで
  methods: {
    reverseMessage: function (){
      //this.messageで要素にアクセス
      this.hello = this.hello.split('').reverse().join('');
    },
    sayHi: function(){
      // message(Hello World)を返したい時はthisを使ってアクセスできる
      // テンプレート内ではthisは使わないよ。
      this.message = "ポケモン";
      return this.message;
    },
    // 処理はmethods内に書くのがベスト
    count: function() {
      this.countUpNumber += 1;
    },
    changeMousePosition: function(event) {
      // イベントオブジェクトが出力される
      // console.log(event);
      this.x = event.clientX;
      this.y = event.clientY;
    },
    // v-onディレクティブの引数を今回はtimesとおいて処理を行なっている
    countUp: function(times) {
      this.countUpNumber1 += 1 * times
    },
    changeMousePositionVersion2: function(number, event) {
      this.x1 = event.clientX / number;
      this.y1 = event.clientY / number;
    },
    // イベント修飾子stopPropagation
    noEvent: function(event) {
      // 伝えることを止める。
      event.stopPropagation();
    },
    noPreventDefault: function(event) {
      //デフォルトの動きを止める 
      event.preventDefault();
    },
    // アラートを表示する関数
    myAlert: function(){
      alert('アラート');
    },
    countUpNumberTest: function() {
      this.countUpEventTestNumber += 1;
    },
  }
});

new Vue({
  el: '#model',
  data: {
    message: 'こんにちは',
  }
});

new Vue({
  el: '#computed',
  data:{
    counter: 0,
    otherCounter: 0,
  },
  
  computed:{
    computedLessThanThree: function() {
      // console.log('computed');
      // this.counterの値が変化したらこの関数が実行される
      return this.counter > 3 ? '3より大きい' : '3以下';
    },
  },
  methods: {
    methodsLessThanThree: function() {
      // console.log('methods');
      // ページ内で何か変化が起きたら実行される。つまり余計な実行がされる可能性がある
      return this.counter > 3 ? '3より大きい' : '3以下';
    }
  },
  // 特定のデータが変わった時に使用する
  // computedを優先すること。
  // 非同期処理はcomputedではなくwatcherを使用する
  watch: {
    counter: function() {
      // watcherではthisが使えないため変数に格納してから使用する
      var vm = this;
      // 非同期処理
      setTimeout(function() {
        vm.counter = 0
      }, 3000);
    },
  }
})

new Vue({
  el:'#class',
  data:{
    isActive: true,
    color: 'red',
    bg: 'bg-blue',
  },
  computed:{
    classObject: function() {
      return {
        red: this.isActive,
        'bg-blue': !this.isActive,
      }
    }
  }
})

new Vue({
  el: '#style',
  data: {
    textColor: 'red',
    bgColor: 'yellow',
    styleObject: {
      color: 'red', 
      'background-color': 'blue'
    },
    basicStyle: {
      fontSize: '60px'
    },
  },
})