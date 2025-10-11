/*
 * CSS Paint API Worklet for Polygon Borders
 *
 * This worklet creates custom polygon shapes with borders using the CSS Paint API.
 * It's registered as 'polygon-border' and can be used in CSS with paint(polygon-border).
 *
 * The CSS Paint API allows us to programmatically generate images/graphics
 * that can be used as CSS backgrounds, borders, etc.
 */
registerPaint('polygon-border', class {
  /*
   * inputProperties: Defines which CSS custom properties this worklet can read
   * These are the CSS variables that will be passed from the CSS to this worklet
   */
  static get inputProperties() {
    return [
      "--corner-radius",
      "--stroke-weight",
      "--paint-color",
      "--mode"
    ];
  }
  paint(ctx, geom, properties, args) {
    // Parse corner radius values
    let radii = properties
      .get("--corner-radius")
      .toString()
      .replace(/px/g, "")
      .split(" ");

    // Handle different corner radius formats
    if (radii.length === 1) {
      radii = [radii[0], radii[0], radii[0], radii[0]];
    } else if (radii.length === 2) {
      radii = [radii[0], radii[1], radii[0], radii[1]];
    } else if (radii.length === 3) {
      radii = [radii[0], radii[1], radii[2], radii[1]];
    }

    const inset = parseInt(properties.get("--stroke-weight")) / 2 || 0;
    const radius1 = parseInt(radii[0]) || 0;
    const radius2 = parseInt(radii[1]) || 0;
    const radius3 = parseInt(radii[2]) || 0;
    const radius4 = parseInt(radii[3]) || 0;

    const points = [
      { x: inset, y: radius1 }, //x0,y0
      { x: radius1, y: inset }, //x1,y1
      { x: geom.width - radius2, y: inset }, //x2,y2
      { x: geom.width - inset, y: radius2 }, //x3,y3
      { x: geom.width - inset, y: geom.height - radius3 }, //x4,y4
      { x: geom.width - radius3, y: geom.height - inset }, //x5,y5
      { x: radius4, y: geom.height - inset }, //x6,y6
      { x: inset, y: geom.height - radius4 } //x7,y7
    ];

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y); //x0,y0
    ctx.lineTo(points[1].x, points[1].y);
    ctx.lineTo(points[2].x, points[2].y);
    ctx.lineTo(points[3].x, points[3].y);
    ctx.lineTo(points[4].x, points[4].y);
    ctx.lineTo(points[5].x, points[5].y);
    ctx.lineTo(points[6].x, points[6].y);
    ctx.lineTo(points[7].x, points[7].y);
    ctx.closePath();

    // For masks, we always fill with white (visible) or black (transparent)
    // The 'filled' argument determines the mode

    if (properties.get("--mode")=="filled") {
      ctx.fillStyle = "white"; // White = visible in mask
      ctx.fill();
    } else {
      ctx.strokeStyle = "white";
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }
});
