import { PATH, TITLE } from '../utils'

const GUEST_SIDEBAR = []

const USER_SIDEBAR = [
  ...GUEST_SIDEBAR
]

const ADMIN_SIDEBAR = [
  ...USER_SIDEBAR,
  {path: PATH.MANAGE_BOOK, title: TITLE.MANAGE_BOOK},
  {path: PATH.MANAGE_CHAPTER, title: TITLE.MANAGE_CHAPTER},
  {path: PATH.MANAGE_ACCOUNT, title: TITLE.MANAGE_ACCOUNT},
]

export {
  GUEST_SIDEBAR,
  USER_SIDEBAR,
  ADMIN_SIDEBAR,
}