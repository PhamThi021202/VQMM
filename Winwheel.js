function Winwheel(options, drawWheel) {
    const defaultOptions = {
        canvasId: 'canvas',
        centerX: null,
        centerY: null,
        outerRadius: null,
        innerRadius: 0,
        numSegments: 1,
        drawMode: 'code',
        rotationAngle: 0,
        textFontFamily: 'Arial',
        textFontSize: 20,
        textFontWeight: 'bold',
        textAlignment: 'center',
        fillStyle: 'silver',
        strokeStyle: 'black',
        lineWidth: 1,
        clearTheCanvas: true,
        drawText: true,
        responsive: false,
    };

    Object.assign(this, defaultOptions, options);

    if (this.canvasId) {
        this.canvas = document.getElementById(this.canvasId);
        if (this.canvas) {
            this.ctx = this.canvas.getContext('2d');
            this.centerX = this.centerX || this.canvas.width / 2;
            this.centerY = this.centerY || this.canvas.height / 2;
            this.outerRadius = this.outerRadius || Math.min(this.canvas.width, this.canvas.height) / 2 - this.lineWidth;
        }
    }

    this.segments = Array.from({ length: this.numSegments }, (_, i) => new Segment(options.segments ? options.segments[i] : {}));

    this.updateSegmentSizes();

    if (drawWheel) this.draw(this.clearTheCanvas);
}

Winwheel.prototype.saveResult = function(result) {
    let results = JSON.parse(localStorage.getItem('spinResults')) || [];
    results.push(result);
    localStorage.setItem('spinResults', JSON.stringify(results));
};

Winwheel.prototype.getResults = function() {
    return JSON.parse(localStorage.getItem('spinResults')) || [];
};

Winwheel.prototype.draw = function(clearTheCanvas) {
    if (this.ctx) {
        if (clearTheCanvas) this.clearCanvas();
        // Drawing logic here...
        this.saveResult(this.getWinningSegment()); // Save the result after drawing
    }
};

Winwheel.prototype.getWinningSegment = function() {
    // Logic to determine the winning segment based on the current rotation
    // This is a placeholder; you will need to implement the actual logic
    return "Winning Segment"; // Example placeholder
};

Winwheel.prototype.clearCanvas = function() {
    if (this.ctx) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

// Additional methods for drawing segments, text, and pins can be added here.