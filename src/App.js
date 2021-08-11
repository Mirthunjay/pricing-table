import './App.css';

function App() {
  return (
    <div className="outer-box">
          <div className="inner-box">
              <div className="pricing">
                <h5 className="subcription">FREE</h5>
                <p><span className="price">$0</span>/month</p>
                </div>
                <div className="line"></div>
                <ul className="content">
                  <li >Single User</li>
                  <li >5GB Storage</li>
                  <li >Unlimited Public Projects</li>
                  <li >Community Access</li>
                  <li >Unlimited Private Projects</li>
                  <li >Dedicated Phone Support</li>
                  <li >Free Subdomain</li>
                  <li >Monthly Status Reports</li>
                </ul>
                <button className="button-name">BUTTON</button>
          </div>

          <div className="inner-box">
              <div className="pricing">
                <h5 className="subcription">PLUS</h5>
                <p><span className="price">$9</span>/month</p>
                </div>
                <div className="line"></div>
                <ul className="content">
                  <li >5 Users</li>
                  <li >50GB Storage</li>
                  <li >Unlimited Public Projects</li>
                  <li >Community Access</li>
                  <li >Unlimited Private Projects</li>
                  <li >Dedicated Phone Support</li>
                  <li >Free Subdomain</li>
                  <li >Monthly Status Reports</li>
                </ul>
                <button className="button-name">BUTTON</button>
          </div>

          <div className="inner-box">
              <div className="pricing">
                <h5 className="subcription">PRO</h5>
                <p><span className="price">$49</span>/month</p>
                </div>
                <div className="line"></div>
                <ul className="content">
                  <li >Unlimited Users</li>
                  <li >150GB Storage</li>
                  <li >Unlimited Public Projects</li>
                  <li >Community Access</li>
                  <li >Unlimited Private Projects</li>
                  <li >Dedicated Phone Support</li>
                  <li >Unlimited Free Subdomains</li>
                  <li >Monthly Status Reports</li>
                </ul>
                <button className="button-name">BUTTON</button>
          </div>



      </div>

  );
}

export default App;
