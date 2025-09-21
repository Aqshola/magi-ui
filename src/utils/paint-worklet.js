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
            '--polygon-path',        // The polygon coordinates (e.g., "0 0, 100% 0, 100% 100%, 0 100%")
            '--polygon-border-width', // Border thickness in pixels
            '--polygon-border-color'  // Border color (hex, rgb, etc.)
        ];
    }

    /*
     * paint: The main function that draws the polygon
     *
     * @param {CanvasRenderingContext2D} ctx - Canvas 2D drawing context
     * @param {Object} size - Object with width and height of the element
     * @param {StylePropertyMapReadOnly} properties - CSS custom properties
     */
    paint(ctx, size, properties) {
        // Extract CSS custom properties and provide defaults
        const pathString = properties.get('--polygon-path').toString().trim();
        const borderWidth = parseFloat(properties.get('--polygon-border-width').toString()) || 2;
        const borderColor = properties.get('--polygon-border-color').toString();

        // Get the actual dimensions of the element
        const w = size.width;
        const h = size.height;

        // If no path is provided, use a default angled button shape
        if (!pathString || pathString === '') {
            // Default polygon path for the angled button shape
            const defaultPath = '0% 0%, 90% 0%, 100% 20%, 100% 100%, 0% 100%';
            this.drawPolygon(ctx, defaultPath, w, h, borderWidth, borderColor);
            return;
        }

        // Draw the polygon with the provided path
        this.drawPolygon(ctx, pathString, w, h, borderWidth, borderColor);
    }

    /*
     * drawPolygon: Parses the polygon path and draws it on the canvas
     *
     * @param {CanvasRenderingContext2D} ctx - Canvas drawing context
     * @param {string} pathString - Polygon path (e.g., "0 0, 100% 0, 100% 100%, 0 100%")
     * @param {number} w - Width of the element
     * @param {number} h - Height of the element
     * @param {number} borderWidth - Border thickness
     * @param {string} borderColor - Border color
     */
    drawPolygon(ctx, pathString, w, h, borderWidth, borderColor) {
        /*
         * Parse the polygon path string
         * Example: "0 0, calc(100% - 25px) 0, 100% 25px, 100% 100%, 0 100%"
         * Split by commas to get individual coordinate pairs
         */
        const points = pathString.split(',').map(point => point.trim());

        // A polygon needs at least 3 points
        if (points.length < 3) return;

        /*
         * convertCoordinate: Converts CSS coordinate values to pixel values
         * Handles percentages, pixels, and calc() expressions
         *
         * @param {string} coord - Coordinate value (e.g., "100%", "25px", "calc(100% - 25px)")
         * @param {number} dimension - Reference dimension (width or height)
         * @returns {number} - Pixel value
         */
        const convertCoordinate = (coord, dimension) => {
            coord = coord.trim();

            if (coord.includes('calc(')) {
                // Handle CSS calc() expressions
                const calcMatch = coord.match(/calc\((.+)\)/);
                if (calcMatch) {
                    const expression = calcMatch[1];
                    // Simple parser for "100% - Npx" expressions
                    if (expression.includes('100% - ')) {
                        const subtractValue = parseFloat(expression.replace('100% - ', '').replace('px', ''));
                        return dimension - subtractValue;
                    }
                }
            } else if (coord.includes('%')) {
                // Convert percentage to pixels
                return (parseFloat(coord) / 100) * dimension;
            } else if (coord.includes('px')) {
                // Already in pixels, just parse the number
                return parseFloat(coord);
            } else {
                // Assume it's a percentage if no unit is specified
                return (parseFloat(coord) / 100) * dimension;
            }
            return 0;
        };

        /*
         * Convert all coordinate pairs to pixel values
         * Each point is "x y", so we split by space and convert both coordinates
         */
        const coordinates = points.map(point => {
            const [x, y] = point.split(' ').map(coord => coord.trim());
            return [
                convertCoordinate(x, w),  // Convert x coordinate using width
                convertCoordinate(y, h)   // Convert y coordinate using height
            ];
        });

        /*
         * Draw the polygon border using Canvas API
         */
        ctx.beginPath();                                    // Start a new path
        ctx.moveTo(coordinates[0][0], coordinates[0][1]);   // Move to first point

        // Draw lines to all other points
        for (let i = 1; i < coordinates.length; i++) {
            ctx.lineTo(coordinates[i][0], coordinates[i][1]);
        }

        ctx.closePath();                // Close the path (connects last point to first)
        ctx.lineWidth = borderWidth;    // Set border thickness
        ctx.strokeStyle = borderColor;  // Set border color
        ctx.stroke();                   // Draw the border

        /*
         * Optional: Fill the polygon area with a subtle color
         * This helps with visibility and can be customized or removed
         */


    }
})