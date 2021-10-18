import { get }    from '@mtfe/turbo/router';
import { render } from '@mtfe/turbo/response';
import Controller from '@mtfe/turbo/controller';
/**
 * Controller
 * @docs http://turbo.sankuai.com/docs/controller.md
 */
class Home extends Controller {
  @get('/')
  async index() {
    return render('index');
  }

  @get('/greeting/:name?')
  async simple(params) {
    const { name = 'world' } = params;
    return `hello ${name}`;
  }
}

export default Home;
