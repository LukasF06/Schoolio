function renderAdd() {
  const content = document.getElementById("popup-content");
  content.innerHTML = `<div class="closeBtn" onclick="togglePopup()">&times;</div>
  <h1>Note hinzufügen</h1>
  <form class="addForm" action="">
    <input type="text" placeholder="Testname" />
    <input type="text" placeholder="Note" />
    <select id="subjectSelection" name="subjectSelection">
      <option value="subjectDeutsch">Deutsch</option>
      <option value="subjectEnglisch">Englisch</option>
      <option value="subjectFranzösisch">Französisch</option>
      <option value="subjectSport">Sport</option>
    </select>
    <input type="submit" value="Submit" />
  </form>`;
}

function renderEdit() {
  const content = document.getElementById("popup-content");
  content.style.height = "300px";

  content.innerHTML = `<div class="closeBtn" onclick="togglePopup()">&times;</div>
  <h1>Note editieren</h1>
  <form class="addForm" action="">
    <input type="number" placeholder="ID" />
    <input type="text" placeholder="Testname" />
    <input type="text" placeholder="Note" />
    <select id="subjectSelection" name="subjectSelection">
      <option value="subjectDeutsch">Deutsch</option>
      <option value="subjectEnglisch">Englisch</option>
      <option value="subjectFranzösisch">Französisch</option>
      <option value="subjectSport">Sport</option>
    </select>
    <input type="submit" value="Submit" />
  </form>
</div>`;
}

function renderDelete() {
  const content = document.getElementById("popup-content");
  content.style.height = "auto";
  content.innerHTML = `<div class="closeBtn" onclick="togglePopup()">&times;</div>
  <h1>Note löschen</h1>
  <form class="addForm" action="">
    <input type="number" placeholder="Nummer der Note" />
    <input type="submit" value="Submit" />
  </form>
</div>`;
}
