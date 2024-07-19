// Function to find the determinant of a 2x2 matrix
function findDeterminant2x2() {
    let a11 = parseFloat(document.getElementById('a11').value);
    let a12 = parseFloat(document.getElementById('a12').value);
    let a21 = parseFloat(document.getElementById('a21').value);
    let a22 = parseFloat(document.getElementById('a22').value);

    let determinant = (a11 * a22) - (a12 * a21);

    document.getElementById('detResult2x2').innerText = `Determinant: ${determinant}`;
}

// Function to solve a system of linear equations using a 2x2 matrix
function solveSystem2x2() {
    let a11 = parseFloat(document.getElementById('a11').value);
    let a12 = parseFloat(document.getElementById('a12').value);
    let a21 = parseFloat(document.getElementById('a21').value);
    let a22 = parseFloat(document.getElementById('a22').value);
    let b1 = parseFloat(document.getElementById('b1').value);
    let b2 = parseFloat(document.getElementById('b2').value);

    let determinant = (a11 * a22) - (a12 * a21);

    if (determinant === 0) {
        document.getElementById('solutionResult2x2').innerText = 'The system has no unique solution.';
        return;
    }

    let x = (b1 * a22 - b2 * a12) / determinant;
    let y = (a11 * b2 - a21 * b1) / determinant;

    document.getElementById('solutionResult2x2').innerText = `Solution: x = ${x}, y = ${y}`;
}

// Function to find the determinant of a 3x3 matrix
function findDeterminant3x3() {
    let a11 = parseFloat(document.getElementById('a31').value);
    let a12 = parseFloat(document.getElementById('a32').value);
    let a13 = parseFloat(document.getElementById('a33').value);
    let a21 = parseFloat(document.getElementById('a41').value);
    let a22 = parseFloat(document.getElementById('a42').value);
    let a23 = parseFloat(document.getElementById('a43').value);
    let a31 = parseFloat(document.getElementById('a51').value);
    let a32 = parseFloat(document.getElementById('a52').value);
    let a33 = parseFloat(document.getElementById('a53').value);

    let determinant = a11 * (a22 * a33 - a23 * a32) - a12 * (a21 * a33 - a23 * a31) + a13 * (a21 * a32 - a22 * a31);

    document.getElementById('detResult3x3').innerText = `Determinant: ${determinant}`;
}

// Function to solve a system of linear equations using a 3x3 matrix
function solveSystem3x3() {
    let a11 = parseFloat(document.getElementById('a31').value);
    let a12 = parseFloat(document.getElementById('a32').value);
    let a13 = parseFloat(document.getElementById('a33').value);
    let a21 = parseFloat(document.getElementById('a41').value);
    let a22 = parseFloat(document.getElementById('a42').value);
    let a23 = parseFloat(document.getElementById('a43').value);
    let a31 = parseFloat(document.getElementById('a51').value);
    let a32 = parseFloat(document.getElementById('a52').value);
    let a33 = parseFloat(document.getElementById('a53').value);
    let b1 = parseFloat(document.getElementById('c1').value);
    let b2 = parseFloat(document.getElementById('c2').value);
    let b3 = parseFloat(document.getElementById('c3').value);

    let determinant = a11 * (a22 * a33 - a23 * a32) - a12 * (a21 * a33 - a23 * a31) + a13 * (a21 * a32 - a22 * a31);

    if (determinant === 0) {
        document.getElementById('solutionResult3x3').innerText = 'The system has no unique solution.';
        return;
    }

    let dx = b1 * (a22 * a33 - a23 * a32) - b2 * (a21 * a33 - a23 * a31) + b3 * (a21 * a32 - a22 * a31);
    let dy = a11 * (b2 * a33 - b3 * a32) - a12 * (b1 * a33 - b3 * a31) + a13 * (b1 * a32 - b2 * a31);
    let dz = a11 * (a22 * b3 - a23 * b2) - a12 * (a21 * b3 - a23 * b1) + a13 * (a21 * b2 - a22 * b1);

    let x = dx / determinant;
    let y = dy / determinant;
    let z = dz / determinant;

    document.getElementById('solutionResult3x3').innerText = `Solution: x = ${x}, y = ${y}, z = ${z}`;
}
