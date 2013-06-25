    <ul class="nav nav-tabs" id="myTab">
    <li class="active"><a href="#home">Главная</a></li>
    <li><a href="#profile">Профиль</a></li>
    <li><a href="#messages">Сообщения</a></li>
    <li><a href="#settings">Настройки</a></li>
    </ul>
     
    <div class="tab-content">
    <div class="tab-pane active" id="home">...</div>
    <div class="tab-pane" id="profile">...</div>
    <div class="tab-pane" id="messages">...</div>
    <div class="tab-pane" id="settings">...</div>
    </div>
     
    <script>
    $(function () {
    $('#myTab a:last').tab('show');
    })
    </script>