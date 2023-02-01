import { rootStackScreensData } from '~navigation/config/rootScreens'

const unauthorizedPaths = [
  ...rootStackScreensData.modals,
  ...rootStackScreensData.unauthorized,
].map((screen) => screen.deeplink)

/**
 *  Checks whether provided link contains authorized link or not.
 *
 * @param linkWithoutPrefix link to check with navigation authorized paths
 */
export const isAuthorizedLink = (linkWithoutPrefix: string): boolean => {
  console.log(linkWithoutPrefix, unauthorizedPaths)
  return unauthorizedPaths.some((path) => !linkWithoutPrefix.includes(path))
}
