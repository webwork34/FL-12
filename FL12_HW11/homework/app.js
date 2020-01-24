const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

const icons = {
  'open': 'folder_open',
  'closed': 'folder',
  'file': 'insert_drive_file'
}

rootNode.insertAdjacentHTML('afterbegin', `<ul>
  <li><p class="not_empty folder"><i class="material-icons icon_folder">${icons.closed}</i>
  <span>${structure[0].title}</span></p>
    <ul class="nested">
      <li><p class="not_empty"><i class="material-icons file">${icons.file}</i>
      <span>${structure[0].children[0].title}</span></p></li>
      <li><p class="not_empty folder"><i class="material-icons icon_folder">${icons.closed}</i>
      <span>${structure[0].children[1].title}</span></p>
        <ul class="nested">
          <li><p class="not_empty"><i class="material-icons file">${icons.file}</i>
          <span>${structure[0].children[1].children[0].title}</span></p></li>
          <li><p class="not_empty folder"><i class="material-icons icon_folder">${icons.closed}</i>
          <span>${structure[0].children[1].children[1].title}</span></p>
            <ul class="nested">
              <li><p class="empty">Folder is empty</p></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li><p class="not_empty folder"><i class="material-icons icon_folder">${icons.closed}</i>
  <span>${structure[1].title}</span></p>
    <ul class="nested">
      <li><p class="not_empty folder"><i class="material-icons icon_folder">${icons.closed}</i>
      <span>${structure[1].children[0].title}</span></p>
        <ul class="nested">
          <li><p class="empty">Folder is empty</p></li>
        </ul>
      </li>
    </ul>
  </li>
  </ul>`);

const folders = document.querySelectorAll('.folder');
folders.forEach(elem => {
  elem.addEventListener('click', function(){
    this.parentElement.querySelector('.nested').classList.toggle('active');
    if(this.firstChild.innerHTML === `${icons.closed}`){
      this.firstChild.innerHTML = `${icons.open}`;
    }else{
      this.firstChild.innerHTML = `${icons.closed}`;
    }
  });
});