@import '/src/screens/theme/theme.css';

@import url('/src/screens/theme/body.css');

@import url('/src/screens/components/navbar.css');

.container {
  margin: 0;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1060;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  /* display: none; */
}

.modal-fade {
  transition: opacity .15s linear;
  background-color: rgba(0,0,0,.2);
  width: 100%;
}

.modal.show .modal-dialog {
  transform: none;
  display: flex;
  justify-content: center;
}

.modal.fade .modal-dialog {
  transition: transform .3s ease-out;
  transform: translate(0,-50px);
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
  top: 30%;
}

.modal-content {
  /* position: relative; */
  display: flex;
  flex-direction: column;
  width: 25%;
  padding: 2em;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 0.3rem;
  outline: 0;
  top: 50%;
}

.modal-header {
  display: flex;
  justify-content: space-between;
}

.modal-body input {
  width: 100%;
}

.close-modal-btn {
  position: relative;
  background-color: transparent;
  width: 32px;
  height: 32px;
  border: none;
  right: 0;
  top: 0;
}

.close-modal-btn i {
  font-size: 25px;
}

.submit-sub-btn {
  margin-top: 1em;
  padding: 0.4em 2em;
  background-color: var(--purple);
  font-size: 14px;
  line-height: 2em;
  font-family: 'Poppins', sans-serif;
  color: #fff;
  border: none;
  border-radius: 5px;
}

form input {
  padding: 10px;
  width: 100%;
  font-size: 16px;
}

.influenciadores .input div {
  position: relative;
  display: flex;
}

.influenciadores .input div i.fas {	
  position: absolute;
  bottom: 30%;
  left: 14px;
}

.influenciadores .tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.influenciadores .tag-list .tag {
  padding: 5px 10px;
  border-radius: 5px;
  border: solid 1px var(--text-light-purple);
}

.influenciadores .tag-list .tag .delete-btn {
  display: inline-block;
  margin: 0 2px;
  width: 8px;
  text-align: center;
  color: var(--text-light-purple);
}

.tagify{    
  width: 100%;
  max-width: 100%;
}

.tagify__tag {
  background-color: #e5e5e5;
}

.hours-enters{
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.hours-enters div input {
  width: 93%;
}

.records-list-container {
  margin: 1%;
  padding: 1%;
}

.table-ultima {
  width: 80%;
  height: 45px;
  margin-top: 20px;
  border-radius: 15px;
  background-color: rgb(244, 241, 247);
  border: 0.3px solid rgb(212, 179, 230);
  align-items: center;
  text-align: center;
  padding: 5px;
}

.table-ultima .fator {
  border-radius: 15px;
  background-color: rgb(212, 179, 230);
  border: 1px solid rgb(212, 179, 230);
}

.button-h1 {
  margin-top: 10px;
  margin: 10px;
}

.button-new {
  border: 1px solid rgb(212, 179, 230);
  padding: 2px;
  background-color: rgb(212, 179, 230) ;
  width: 15%;
  border-radius: 5px;
}
