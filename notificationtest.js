function notification (x) {
  if(typeof x == "object") var x = x[0];
  new Notification(x);
}
return notification;
