class SelfAdjustingInterval {
    constructor(worker, interval, reporter) {
        this.expected;
        this.timeout;
        this.interval = interval;

        // This object needs to be bound in order to be able to invoke worker function in step()
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.step = this.step.bind(this);
        this.worker = worker;
        this.reporter = reporter;
    }

    start() {
        this.expected = Date.now() + this.interval;
        this.timeout = setTimeout(this.step, this.interval);
    }

    stop() {
        clearTimeout(this.timeout);
    }

    step() {
        var drift = Date.now() - this.expected;

        if (drift > this.interval) {
            if (this.errorFunc)
                this.errorFunc();
        }

        this.worker();
        this.expected += this.interval;
        this.timeout = setTimeout(this.step, Math.max(0, this.interval - drift));
    }
}

export default SelfAdjustingInterval;
