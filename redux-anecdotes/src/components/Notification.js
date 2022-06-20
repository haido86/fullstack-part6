import { useSelector } from 'react-redux';

const Notification = () => {
  const notification = useSelector((state) => state.notifications);
  console.log('notification', notification);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };
  return (
    <div>
      {notification.isShow && <div style={style}>{notification.content}</div>}
    </div>
  );
};

export default Notification;
