const dropdownContent = document.getElementById('dropdown-content');
const dropdownButton = document.querySelector('.dropbtn');
dropdownButton.addEventListener('click', () => {
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});
