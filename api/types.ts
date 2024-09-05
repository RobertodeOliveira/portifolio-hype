export type ApiResponseContact = {
    success: true,
    message: string,
  } | {
    success: false
    message: string
  }

export type ApiResponseComments = {
  success: true,
  message: string,
  data: Testimonial[] 
} | {
  success: false
  message: string
  data: []
}

export type Testimonial = {
  id: number,
  name: string,
  company: string,
  activity: string
  comment: string
}