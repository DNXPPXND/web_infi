import React, { Component } from 'react';

class CheckBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkbox1Checked: null,
      checkbox2Checked: null,
      checkbox3Checked: null,
      helperCheckboxChecked: null,
    };
  }

  handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    this.setState({ [id]: checked });
  };

  render() {
    return (
      <fieldset>
        <legend className="sr-only">Checkbox variants</legend>

        <div>
          <input
            checked={this.state.checkbox1Checked}
            id="checkbox-1"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={this.handleCheckboxChange}
          />
          <label
            htmlFor="checkbox-1"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-black-300"
          >
           Softskills{' '}
            
            .
          </label>
          </div>
          <div>
          <input
            checked={this.state.checkbox1Checked}
            id="checkbox-1"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-black-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={this.handleCheckboxChange}
          />
          <label
            htmlFor="checkbox-1"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-black-300"
          >
           Data Design{' '}

            .
          </label>
          </div>
          <div>
          <input
            checked={this.state.checkbox1Checked}
            id="checkbox-1"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={this.handleCheckboxChange}
          />
          <label
            htmlFor="checkbox-1"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-black-300"
          >
            UX/UI{' '}
        
            .
          </label>
          </div>
          <div>
          <input
            checked={this.state.checkbox1Checked}
            id="checkbox-1"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={this.handleCheckboxChange}
          />
          <label
            htmlFor="checkbox-1"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-black-300"
          >
           Programming{' '}
            
            .
          </label>
          </div>
          <div>
          <input
            checked={this.state.checkbox1Checked}
            id="checkbox-1"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={this.handleCheckboxChange}
          />
          <label
            htmlFor="checkbox-1"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-black-300"
          >
            Techology{' '}
      
            .
          </label>
          </div>
          <div>
          <input
            checked={this.state.checkbox1Checked}
            id="checkbox-1"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={this.handleCheckboxChange}
          />
          <label
            htmlFor="checkbox-1"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-black-300"
          >
            System Analysis{' '}
           
            .
          </label>
        </div>

        {/* Repeat the pattern for other checkboxes */}
      </fieldset>
    );
  }
}

export default CheckBox;
