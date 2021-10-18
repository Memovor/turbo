import { get } from '@mtfe/turbo/router';
import { sso } from '@mtfe/turbo/security';
import { render, redirect } from '@mtfe/turbo/response';
import { RenderType } from '@mtfe/turbo/react/render';
import Controller from '@mtfe/turbo/controller';

class Dashboard extends Controller {
  @sso
  @get('/dashboard')
  async index(sso) {
    return render('app', { user: sso }, {
      type: RenderType.DATA | RenderType.JS
    });
  }
  @sso
  @get('/logout')
  async logout(sso) {
    await sso.logout();
    return redirect('/dashboard');
  }
}

export default Dashboard;
