import ProfileCtrl  from './profile.ctrl';
import routes       from './profile.routes';

const ProfileModule = angular.module('profile', []);

angular.module('profile')
    .config(routes)
    .controller('ProfileCtrl', ProfileCtrl);

export default ProfileModule;
