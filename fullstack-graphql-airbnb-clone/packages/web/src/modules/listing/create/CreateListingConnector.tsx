import * as React from 'react'
import { Form as AntForm, Button } from 'antd'
import { Formik, Form, FormikActions } from 'formik'
import { withCreateListing, WithCreateListing } from '@abb/controller'
import { RouteComponentProps } from 'react-router-dom'

import { Page1 } from './ui/Page1'
import { Page2 } from './ui/Page2'
import { Page3 } from './ui/Page3'

const FormItem = AntForm.Item

interface FormValues {
  name: string
  picture: File | null
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
class CreateListingConnector extends React.PureComponent<
  RouteComponentProps<{}> & WithCreateListing,
  State
> {
  state = {
    page: 0,
  }

  submit = async (
    values: FormValues,
    { setSubmitting }: FormikActions<FormValues>
  ) => {
    await this.props.creatingListing(values)
    setSubmitting(false)
  }

  nextPage = () => this.setState(state => ({ page: state.page + 1 }))

  render() {
    return (
      <Formik<FormValues>
        initialValues={{
          name: '',
          picture: null,
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
        {({ isSubmitting, values }) => (
          <Form style={{ display: 'flex' }}>
            <div style={{ width: 400, margin: '20px auto' }}>
              {pages[this.state.page]}
              <FormItem>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {this.state.page === pages.length - 1 ? (
                    <div>
                      <Button
                        type="primary"
                        htmlType="submit"
                        disabled={isSubmitting}
                      >
                        Create listing
                      </Button>
                    </div>
                  ) : (
                    <Button
                      type="primary"
                      htmlType="button"
                      onClick={this.nextPage}
                    >
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

export default withCreateListing(CreateListingConnector)
