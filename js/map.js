function initialize() {
	var mapCanvas = document.getElementById('map-canvas');
	var myLatlng = new google.maps.LatLng(37.2679212, 127.0056315);		
	var mapOptions = {			
		center: myLatlng,//지도에서 가운데로 위치할 위도와 경도
		zoom: 16, //지도 확대 단계
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(mapCanvas, mapOptions);

	var contentString = '<div style="width:100px;height:50px;">더휴먼컴퓨터아트학원</div>';		

	var infowindow = new google.maps.InfoWindow({ //말풍선 띄우기
		content: contentString,
		size: new google.maps.Size(200,100)
	});

	var marker = new google.maps.Marker({
		position: myLatlng,//마커가 위치할 위도와 경도
		map: map, 
		draggable:true,			
		title: 'Web Design by Ingings'
	});
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map, marker);

		if (marker.getAnimation() != null) {
			marker.setAnimation(null);
		} else {
			marker.setAnimation(google.maps.Animation.BOUNCE);
		}
	});

	marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);