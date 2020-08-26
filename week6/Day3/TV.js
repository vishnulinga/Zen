var channels = {
    '1': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    '2': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    '3': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    '4': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    '5': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    '6': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    '7': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    '8': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    '9': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    '10': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    '11': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    '12': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    '13': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    '14': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    '15': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    '16': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    '17': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    '18': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    '19': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    '20': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    '21': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    '22': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    '23': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    '24': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    '25': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    '26': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    '27': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    '28': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    '29': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    '30': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    '31': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    '32': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    '33': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    '34': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    '35': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    '36': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    '37': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    '38': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    '39': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    '40': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    '41': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    '42': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    '43': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    '44': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    '45': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    '46': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    '47': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    '48': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    '49': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    '50': "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
};
var TV = /** @class */ (function () {
    function TV(brand) {
        this.volume = 50;
        this.brand = brand;
        this.channel = 1;
        this.price = 40000;
        this.inch = 35;
        this.on = true;
    }
    TV.prototype.volumeup = function () {
        if (this.volume == 100)
            return this.volume + 1;
        else {
            this.volume++;
            return this.volume;
        }
    };
    TV.prototype.volumedown = function () {
        if (this.volume == 1)
            return this.volume - 1;
        else {
            this.volume--;
            return this.volume;
        }
    };
    TV.prototype.channelup = function () {
        if (this.channel == 50)
            this.channel = 1;
        else
            this.channel++;
        console.log(this.channel);
        return channels[this.channel];
    };
    TV.prototype.channeldown = function () {
        if (this.channel == 1)
            this.channel = 50;
        else
            this.channel--;
        console.log(this.channel);
        return channels[this.channel];
    };
    TV.prototype.reset = function () {
        this.volume = 50;
        this.channel = 1;
    };
    TV.prototype.status = function () {
        return this.brand + " at channel " + this.channel + ", volume " + this.volume;
    };
    return TV;
}());
var LEDTV = /** @class */ (function () {
    function LEDTV(brand) {
        this.volume = 50;
        this.brand = brand;
        this.channel = 1;
        this.price = 40000;
        this.inch = 35;
        this.on = true;
        this.energy = 'green';
        this.lifespan = 120;
        this.refreshrate = 3;
        this.screenthickness = 30;
    }
    LEDTV.prototype.volumeup = function () {
        if (this.volume == 100)
            return this.volume + 1;
        else {
            this.volume++;
            return this.volume;
        }
    };
    LEDTV.prototype.volumedown = function () {
        if (this.volume == 1)
            return this.volume - 1;
        else {
            this.volume--;
            return this.volume;
        }
    };
    LEDTV.prototype.channelup = function () {
        if (this.channel == 50)
            this.channel = 1;
        else
            this.channel++;
        return channels[this.channel];
    };
    LEDTV.prototype.channeldown = function () {
        if (this.channel == 1)
            this.channel = 50;
        else
            this.channel--;
        return channels[this.channel];
    };
    LEDTV.prototype.reset = function () {
        this.volume = 50;
        this.channel = 1;
    };
    LEDTV.prototype.status = function () {
        return this.brand + " at channel " + this.channel + ", volume " + this.volume;
    };
    return LEDTV;
}());
var PlasmaTV = /** @class */ (function () {
    function PlasmaTV(brand) {
        this.volume = 50;
        this.brand = brand;
        this.channel = 1;
        this.price = 40000;
        this.inch = 35;
        this.on = true;
        this.energy = 'green';
        this.lifespan = 100;
        this.refreshrate = 1;
        this.screenthickness = 20;
    }
    PlasmaTV.prototype.volumeup = function () {
        if (this.volume == 100)
            return this.volume + 1;
        else {
            this.volume++;
            return this.volume;
        }
    };
    PlasmaTV.prototype.volumedown = function () {
        if (this.volume == 1)
            return this.volume - 1;
        else {
            this.volume--;
            return this.volume;
        }
    };
    PlasmaTV.prototype.channelup = function () {
        if (this.channel == 50)
            this.channel = 1;
        else
            this.channel++;
        return channels[this.channel];
    };
    PlasmaTV.prototype.channeldown = function () {
        if (this.channel == 1)
            this.channel = 50;
        else
            this.channel--;
        return channels[this.channel];
    };
    PlasmaTV.prototype.reset = function () {
        this.volume = 50;
        this.channel = 1;
    };
    PlasmaTV.prototype.status = function () {
        return this.brand + " at channel " + this.channel + ", volume " + this.volume;
    };
    return PlasmaTV;
}());
