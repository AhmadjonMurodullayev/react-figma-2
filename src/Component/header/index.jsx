import { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <>
        <header className="mb-8">
          <ul className="flex space-x-4 justify-end px-7 py-4">
            <li>
              <a
                href="#"
                className="text-black hover:underline text-2xl"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:underline text-2xl"
              >
                Blog
              </a>
            </li>   
            <li>
              <a href="#" className="text-black hover:underline text-2xl">
                Contact
              </a>
            </li>
          </ul>
        </header>
      </>
    );
  }
}
