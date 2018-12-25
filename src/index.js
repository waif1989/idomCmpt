import './assets/styles/reset.css';
import './assets/styles/index.less';

const iFrame = document.getElementById('ifr');
iFrame.onload = () => {
	document.getElementById('com1').addEventListener('click', function (ev) {
		const val = document.getElementById('ui-config-com1').value;
		const fn = `var p = ${val}`;
		const msgObj = {
			title: 'Header',
			fn
		};
		iFrame.contentWindow.postMessage(JSON.stringify(msgObj), '*');
	});
};

// const props = {
// 	bgColor: 'blue',
// 	title: '首页',
// 	backWord: '返回',
// 	backIcon: true,
// 	backTo () {
// 		// todo
// 	}
// };
// new Header(props, document.getElementById('app'));

// import {Lottery, LotteryTurntable} from 'iDomCmpt';
//
// var img = 'https://mimg.iwincaipiao.com/ggimg/2018/5/90d852463f72238c81209eb53d9570b8.png';
// var lotteryList = [img, img, img, img, img, img, img, img, img];
// new Lottery({
// 	lotteryList: lotteryList,
// 	runningTurns: 4,
// 	runningSpeedTime: 90,
// 	prizePositon: 3
// }, document.getElementById('app'));

/*
const props = {
	rotateNum: 8,
	direction: 0,
	prizePosition: 0,
	prizeNames: ['未中奖', '提高白条额度', '免分期服务费', '5元免单', '10元免单', '50元免单', '4999免单'],
	prizeTableUrl: 'https://onegoods.nosdn.127.net/resupload/2018/11/26/d8df203bd890696193797540c48b4583.png',
	prizePointerUrl: 'https://onegoods.nosdn.127.net/resupload/2018/11/26/d5779a5af63ea663333ab957e3a4c1ea.png',
	prizeTableStyle: '',
	prizePointerStyle: '',
	finishCb(val) {
		console.log('finish:', val);
		setTimeout(() = > {
			props.prizePosition = 1;
	}, 500);
	}
};
new LotteryTurntable(props, document.getElementById('app'));*/
