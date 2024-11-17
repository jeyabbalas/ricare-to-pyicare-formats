function ui(divID) {
    let divUI = divID ? document.getElementById(divID) : document.createElement('div');

    divUI.innerHTML = `
    <h1>Convert iCARE RData into interoperable formats</h1>
    
    <form id="converterForm">
        <div class="form-group">
            <label for="rdataFile">RData File (.Rda):</label>
            <input type="file" id="rdataFile" accept=".rda,.RData" required>
            <div class="error" id="rdataError">Please select an RData file</div>
        </div>

        <div class="form-group">
            <label for="diseaseFile">Disease incidence rates file name:</label>
            <input type="text" id="diseaseFile" required>
            <div class="error" id="diseaseError">This field is required</div>
        </div>

        <div class="form-group">
            <label for="competingFile">Competing events incidence rates file name:</label>
            <input type="text" id="competingFile" required>
            <div class="error" id="competingError">This field is required</div>
        </div>

        <div class="form-group">
            <label for="referenceFile">Reference dataset file name:</label>
            <input type="text" id="referenceFile" required>
            <div class="error" id="referenceError">This field is required</div>
        </div>

        <div class="form-group">
            <label for="covariateFile">Covariate information file name:</label>
            <input type="text" id="covariateFile" required>
            <div class="error" id="covariateError">This field is required</div>
        </div>

        <div class="form-group">
            <label for="formulaFile">Model formula file name:</label>
            <input type="text" id="formulaFile" required>
            <div class="error" id="formulaError">This field is required</div>
        </div>

        <div class="form-group">
            <label for="parametersFile">Model parameters file name:</label>
            <input type="text" id="parametersFile" required>
            <div class="error" id="parametersError">This field is required</div>
        </div>

        <div class="button-group">
            <button type="button" id="generateButton">Generate interoperable formats</button>
            <button type="button" id="resetButton">Reset</button>
        </div>

        <div class="loading">
            <i class="fas fa-spinner fa-spin"></i>
            <p>Processing your files...</p>
        </div>

        <div class="button-group">
            <button type="button" id="downloadButton">Download interoperable format files</button>
        </div>
    </form>
    `;
}

ui("app");