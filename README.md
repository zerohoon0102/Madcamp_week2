# Madcamp_week2

# Introduce
코로나가 지속되면서 배달음식을 먹는 일이 잦아졌고, 혼자 배달음식을 시켜야하는 상황도 늘었다.
다음 앱은 비슷한 장소의 사람들을 모아 같은 메뉴를 한꺼번에 시켜줄 수 있도록 도와주는 앱이다. 이로써, 혼자 배달음식을 먹고 싶을 때 최소 배달금액, 배달비 등의 문제를 효과적으로 해결할 수 있다. 임시적으로 카이스트 캠퍼스 내부를 대상으로 하였다.   

# Screens
> login/signup 

회원가입용으로 Nickname,id,password의 정보를 입력해야 하며, Nickname이나 id가 기존에 있던 정보라면 중복되었다는 toast 메시지가 뜬다. id와 password를 이용하여 login하며, id가 잘못되었거나 password가 잘못되면 잘못되었다는 toast 메시지를 띄어준다.  

<img width="15%" src="https://user-images.githubusercontent.com/61463592/125501318-721b5c1e-d7f0-4bb6-8be7-60515b883035.png"/>  <img width="15%" src="https://user-images.githubusercontent.com/61463592/125504070-26cc3b55-b90d-424a-ae58-f81fd07a62f0.png"/> <img width="15%" src="https://user-images.githubusercontent.com/61463592/125504813-3594c8a0-b974-43dc-a7ae-97f394d7e895.png"/>  <img width="15%" src="https://user-images.githubusercontent.com/61463592/125504733-4b05eda2-cb77-465c-95cf-4b4eee766b3b.png"/>  




> HomeScreen

우측 상단에 식당을 검색할 수 있는 검색창이 있어 누르면 구글 지도가 띄어진 식당 검색창으로 넘어간다. 아래는 실시간으로 열린 그룹의 리스트가 보여진다. 한식,중식,일식,양식,야식/분식의 다섯 개의 탭을 누르면 각 탭에 해당하는 음식 종류를 포함하는 그룹의 리스트만 필터링되어 보여진다. 각 리스트를 누르면 해당 그룹의 참여할 수 있다.

<img width="15%" src = "https://user-images.githubusercontent.com/61463592/125516866-b9e7e1f2-3bcf-481a-a49b-95a194ef06d9.png"/>  <img width="15%" src = "https://user-images.githubusercontent.com/61463592/125516952-50723fe4-715b-407c-9c6c-253df9f1a00a.png"/>  <img width="15%" src = "https://user-images.githubusercontent.com/61463592/125516987-ea8e6350-9333-4fd0-8e25-52b2f812a19a.png"/>




> Search/AddGroup  
**HomeScreen**에서 검색창으로 넘어왔을 때 나오는 화면으로 검색한 음식점의 정보를 받아와 그룹을 추가할 수 있게 해주는 기능이 구현되어 있다. 검색창에서 그룹을 생성하기 위한 부가적인 정보를 입력하여 추가를 누르면 server에 요청하여 db에 데이터를 추가한다.

<img width="15%" src = "https://user-images.githubusercontent.com/61463592/125517264-96609c27-cb59-4149-8e84-c68f4cc8ce22.png"/>  <img width="15%" src ="https://user-images.githubusercontent.com/61463592/125517342-6a9b82ee-ae8b-4bec-8aad-c6004998e513.png"/>

   



> Current/History
현재 자신이 참여하고 있는 그룹이 뜨고 -를 누르면 해당그룹에서 제외된다. History에서는 자신이 여태까지 참여했던 그룹 리스트가 나온다.

<img width="15%" src = "https://user-images.githubusercontent.com/61463592/125507259-f271df07-b362-40aa-ad30-edffbae140c1.png"/>



> Settings  
로그인한 유저의 정보를 보여주는 화면으로 image를 server에 저장하려 했지만 실패하였다. 비밀번호 변경, 닉네임 변경 기능을 추가할 예정.
<img width="15%" src = "https://user-images.githubusercontent.com/61463592/125506160-bc0673eb-ac67-4447-95a3-d621a7293fdf.png"/>

