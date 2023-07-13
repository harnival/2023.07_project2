if( 'serviceWorker' in navigator ){
    navigator.serviceWorker.register('./service-worker-dev.js')
    .then(res => res.pushManager.getSubscription())
}
if( !("Notification" in Window)) {
    alert("알림 지원 안 됨.")
} else if(!Notification.permission || Notification.permission == "default") {
    Notification.requestPermission()
        .then(res => {
            if( res == "granted"){
              alert("notification permitted.")
            }
        })
} else if( Notification.permission == "granted") {
    console.log("[notification] permitted.")
} else if( Notification.permission == "denied") {
    console.log("[notification] denied");
}