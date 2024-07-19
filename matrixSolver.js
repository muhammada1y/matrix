// Function to convert a 2x2 matrix to RREF with steps
function findRREF2x2() {
    let a11 = parseFloat(document.getElementById('a11').value);
    let a12 = parseFloat(document.getElementById('a12').value);
    let a21 = parseFloat(document.getElementById('a21').value);
    let a22 = parseFloat(document.getElementById('a22').value);

    let matrix = [
        [a11, a12],
        [a21, a22]
    ];

    let steps = [];
    steps.push('<strong>Initial Matrix:</strong><br>' + matrixToHTML(matrix));

    // Step 1: Make the leading coefficient of the first row equal to 1
    if (matrix[0][0] !== 0) {
        let lead = matrix[0][0];
        matrix[0] = matrix[0].map(val => val / lead);
        steps.push('<strong>Step 1:</strong> Scale the first row:<br>' + matrixToHTML(matrix));
    }

    // Step 2: Eliminate the first column in the second row
    if (matrix[1][0] !== 0) {
        let factor = matrix[1][0];
        matrix[1] = matrix[1].map((val, i) => val - factor * matrix[0][i]);
        steps.push('<strong>Step 2:</strong> Eliminate the first column in the second row:<br>' + matrixToHTML(matrix));
    }

    // Step 3: Make the leading coefficient of the second row equal to 1
    if (matrix[1][1] !== 0) {
        let lead = matrix[1][1];
        matrix[1] = matrix[1].map(val => val / lead);
        steps.push('<strong>Step 3:</strong> Scale the second row:<br>' + matrixToHTML(matrix));
    }

    // Step 4: Eliminate the second column in the first row
    if (matrix[0][1] !== 0) {
        let factor = matrix[0][1];
        matrix[0] = matrix[0].map((val, i) => val - factor * matrix[1][i]);
        steps.push('<strong>Step 4:</strong> Eliminate the second column in the first row:<br>' + matrixToHTML(matrix));
    }

    displaySteps(steps, 'steps2x2');
}

// Function to convert a 3x3 matrix to RREF with steps
function findRREF3x3() {
    let a11 = parseFloat(document.getElementById('a31').value);
    let a12 = parseFloat(document.getElementById('a32').value);
    let a13 = parseFloat(document.getElementById('a33').value);
    let a21 = parseFloat(document.getElementById('a41').value);
    let a22 = parseFloat(document.getElementById('a42').value);
    let a23 = parseFloat(document.getElementById('a43').value);
    let a31 = parseFloat(document.getElementById('a51').value);
    let a32 = parseFloat(document.getElementById('a52').value);
    let a33 = parseFloat(document.getElementById('a53').value);

    let matrix = [
        [a11, a12, a13],
        [a21, a22, a23],
        [a31, a32, a33]
    ];

    let steps = [];
    steps.push('<strong>Initial Matrix:</strong><br>' + matrixToHTML(matrix));

    let rows = matrix.length;
    let cols = matrix[0].length;
    let r = 0;

    for (let c = 0; c < cols; c++) {
        // Find the pivot row
        let pivotRow = r;
        for (let i = r + 1; i < rows; i++) {
            if (Math.abs(matrix[i][c]) > Math.abs(matrix[pivotRow][c])) {
                pivotRow = i;
            }
        }

        if (matrix[pivotRow][c] !== 0) {
            // Swap rows
            [matrix[r], matrix[pivotRow]] = [matrix[pivotRow], matrix[r]];
            steps.push(`<strong>Step ${c + 1}:</strong> Swap row ${r + 1} with row ${pivotRow + 1}:<br>` + matrixToHTML(matrix));

            // Scale the pivot row
            let pivotValue = matrix[r][c];
            matrix[r] = matrix[r].map(val => val / pivotValue);
            steps.push(`<strong>Step ${c + 1}:</strong> Scale the pivot row:<br>` + matrixToHTML(matrix));

            // Eliminate the column
            for (let i = 0; i < rows; i++) {
                if (i !== r) {
                    let factor = matrix[i][c];
                    matrix[i] = matrix[i].map((val, j) => val - factor * matrix[r][j]);
                }
            }
            steps.push(`<strong>Step ${c + 1}:</strong> Eliminate the column:<br>` + matrixToHTML(matrix));

            r++;
        }
    }

    displaySteps(steps, 'steps3x3');
}

// Function to convert a matrix to HTML
function matrixToHTML(matrix) {
    return '<table>' + matrix.map(row => '<tr>' + row.map(val => `<td>${val}</td>`).join('') + '</tr>').join('') + '</table>';
}

// Function to display the steps
function displaySteps(steps, elementId) {
    let resultDiv = document.getElementById(elementId);
    resultDiv.innerHTML = steps.join('<br>');
}
