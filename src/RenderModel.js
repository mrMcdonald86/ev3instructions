import './css/uh.css'

function RenderModel({ s }) {
    return (
        <div className="container">
            {s === 1 && <SimpleRender src={'brain'}/>}
            {s === 2 && <SimpleRender src={'rightleg'}/>}
            {s === 3 && <SimpleRender src={'rightleg'}/>}
            {s === 4 && <SimpleRender src={'leftleg'}/>}
            {s === 5 && <SimpleRender src={'leftleg'}/>}
            {s === 6 && <SimpleRender src={'longarm'}/>}
            {s === 7 && <SimpleRender src={'frontrod'}/>}
            {s === 8 && <SimpleRender src={'underpiece'}/>}
            {s === 9 && <SimpleRender src={'underpiece'}/>}
            {s === 10 && <SimpleRender src={'longarm'}/>}
            {s === 11 && <SimpleRender src={'longarm'}/>}
            {s === 12 && <SimpleRender src={'touchsensor'}/>}
            {s === 13 && <SimpleRender src={'touchsensor'}/>}
            {s === 14 && <SimpleRender src={'longarm'}/>}
            {s === 15 && <SimpleRender src={'longarm'}/>}
            {s === 16 && <SimpleRender src={'ultrasonicsensor'}/>}
            {s === 17 && <SimpleRender src={'ultrasonicsensor'}/>}
            {s === 18 && <SimpleRender src={'leftmotorbracket'}/>}
            {s === 19 && <SimpleRender src={'leftmotorbracket'}/>}
            {s === 20 && <SimpleRender src={'leftmotorbracket'}/>}
            {s === 21 && <SimpleRender src={'rightmotorbracket'}/>}
            {s === 22 && <SimpleRender src={'rightmotorbracket'}/>}
            {s === 23 && <SimpleRender src={'rightmotorbracket'}/>}
            {s === 24 && <SimpleRender src={'rightrods'}/>}
            {s === 25 && <SimpleRender src={'rightrods'}/>}
            {s === 26 && <SimpleRender src={'leftredbracket'}/>}
            {s === 27 && <SimpleRender src={'leftredbracket'}/>}
            {s === 28 && <SimpleRender src={'rightbackpiece'}/>}
            {s === 29 && <SimpleRender src={'rightbackpiece'}/>}
            {s === 30 && <SimpleRender src={'leftbackpiece'}/>}
            {s === 31 && <SimpleRender src={'leftbackpiece'}/>}
            {s === 32 && <SimpleRender src={'backpiece'}/>}
            {s === 33 && <SimpleRender src={'leftmotor'}/>}
            {s === 34 && <SimpleRender src={'leftmotor'}/>}
            {s === 35 && <SimpleRender src={'leftmotor'}/>}
            {s === 36 && <SimpleRender src={'leftmotor'}/>}
            {s === 37 && <SimpleRender src={'leftmotor'}/>}
            {s === 38 && <SimpleRender src={'leftmotor'}/>}
            {s === 39 && <SimpleRender src={'leftmotor'}/>}
            {s === 40 && <SimpleRender src={'leftmotor'}/>}
            {s === 41 && <SimpleRender src={'leftmotor'}/>}
            {s === 42 && <SimpleRender src={'rightmotor'}/>}
            {s === 43 && <SimpleRender src={'rightmotor'}/>}
            {s === 44 && <SimpleRender src={'rightmotor'}/>}
            {s === 45 && <SimpleRender src={'rightmotor'}/>}
            {s === 46 && <SimpleRender src={'rightmotor'}/>}
            {s === 47 && <SimpleRender src={'rightmotor'}/>}
            {s === 48 && <SimpleRender src={'rightmotor'}/>}
            {s === 49 && <SimpleRender src={'rightmotorwrod'}/>}
            {s === 50 && <SimpleRender src={'wheel'}/>}
            {s === 51 && <SimpleRender src={'rightmotorwwheel'}/>}
            {s === 52 && <SimpleRender src={'leftmotorwrod'}/>}
            {s === 53 && <SimpleRender src={'wheel'}/>}
            {s === 54 && <SimpleRender src={'leftmotorwwheel'}/>}
            {s === 55 && <SimpleRender src={'yellowwasher'}/>}
            {s === 56 && <SimpleRender src={'yellowwasher'}/>}
            {s === 57 && <SimpleRender src={'stabilitybracket'}/>}
            {s === 58 && <SimpleRender src={'stabilitybracket'}/>}
            {s === 59 && <SimpleRender src={'ballcaster'}/>}
            {s === 60 && <SimpleRender src={'ballcaster'}/>}
            {s === 61 && <SimpleRender src={'ballcaster'}/>}
            {s === 62 && <SimpleRender src={'ballcaster'}/>}
            {s === 63 && <SimpleRender src={'ballcaster'}/>}
            {s === 64 && <SimpleRender src={'gyrosensor'}/>}
            {s === 65 && <SimpleRender src={'colorsensor'}/>}
            {s === 66 && <SimpleRender src={'colorsensor'}/>}
            {s === 67 && <SimpleRender src={'colorsensor'}/>}
            {s === 68 && <SimpleRender src={'colorsensor'}/>}

        </div>
    )
    function SimpleRender({ src }) {
        return <model-viewer src={`models/${src}.glb`} camera-controls touch-action="pan-y" style={{ height: '90vh', width: '65vh', float: 'left'}}></model-viewer>;
    }
}


export default RenderModel;
