import emotion01 from '../resources/img/emotion01.png';
import emotion02 from '../resources/img/emotion02.png';
import emotion03 from '../resources/img/emotion03.png';
import emotion04 from '../resources/img/emotion04.png';
import emotion05 from '../resources/img/emotion05.png';
import emotion06 from '../resources/img/emotion06.png';
import emotion07 from '../resources/img/emotion07.png';

export function getEmotionImg(emotionId){
    switch(emotionId){
        case 1:
        return emotion01;
        case 2:
        return emotion02;
        case 3:
        return emotion03;
        case 4:
        return emotion04;
        case 5:
        return emotion05;
        case 6:
        return emotion06;
        case 7:
        return emotion07;

        default:
            return null;
    }
}