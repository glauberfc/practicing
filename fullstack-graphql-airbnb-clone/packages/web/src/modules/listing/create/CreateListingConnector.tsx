import * as React from 'react'
import { Form as AntForm, Button } from 'antd'
import { Formik, Form } from 'formik'

import { Page1 } from './ui/Page1'
import { Page2 } from './ui/Page2'
import { Page3 } from './ui/Page3'
import { RouteComponentProps } from 'react-router-dom'

const FormItem = AntForm.Item

interface FormValues {
  name: string
  category: string
  description: string
  price: number
  beds: number
  guests: number
  latitude: number
  longitude: number
  amenities: string[]
}

interface State {
  page: number
}

const pages = [<Page1 />, <Page2 />, <Page3 />]
export default class CreateListingConnector extends React.PureComponent<
  RouteComponentProps<{}>,
  State
> {
  state = {
    page: 0,
  }

  submit = (values: any) => {
    console.log('values: ', values)
  }

  nextPage = () => this.setState(state => ({ page: state.page + 1 }))

  render() {
    return (
      <Formik<FormValues>
        initialValues={{
          name: '',
          category: '',
          description: '',
          price: 0,
          beds: 0,
          guests: 0,
          latitude: 0,
          longitude: 0,
          amenities: [],
        }}
        onSubmit={this.submit}
      >
        {() => (
          <Form style={{ display: 'flex' }}>
            <div style={{ width: 400, margin: '20px auto' }}>
              {pages[this.state.page]}
              <FormItem>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {this.state.page === pages.length - 1 ? (
                    <Button type="primary" htmlType="submit">
                      Create listing
                    </Button>
                  ) : (
                    <Button type="primary" onClick={this.nextPage}>
                      Next page
                    </Button>
                  )}
                </div>
              </FormItem>
            </div>
          </Form>
        )}
      </Formik>
    )
  }
}
