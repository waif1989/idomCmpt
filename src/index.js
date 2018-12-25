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
    document.getElementById('com2').addEventListener('click', function (ev) {
        const val = document.getElementById('ui-config-com2').value;
        const fn = `var p = ${val}`;
        const msgObj = {
            title: 'Marquee',
            fn
        };
        iFrame.contentWindow.postMessage(JSON.stringify(msgObj), '*');
    });
    document.getElementById('com3').addEventListener('click', function (ev) {
        const val = document.getElementById('ui-config-com3').value;
        const fn = `var p = ${val}`;
        const msgObj = {
            title: 'LotteryTurntable',
            fn
        };
        iFrame.contentWindow.postMessage(JSON.stringify(msgObj), '*');
    });
    document.getElementById('com4').addEventListener('click', function (ev) {
        const val = document.getElementById('ui-config-com4').value;
        const fn = `var p = ${val}`;
        const msgObj = {
            title: 'Lottery',
            fn
        };
        iFrame.contentWindow.postMessage(JSON.stringify(msgObj), '*');
    });
    document.getElementById('com5').addEventListener('click', function (ev) {
        const val = document.getElementById('ui-config-com5').value;
        const fn = `var p = ${val}`;
        const msgObj = {
            title: 'ScratchCard',
            fn
        };
        iFrame.contentWindow.postMessage(JSON.stringify(msgObj), '*');
    });
};
