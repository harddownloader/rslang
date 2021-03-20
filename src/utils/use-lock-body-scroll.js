/* eslint no-param-reassign: 0 */
/* eslint no-return-assign: "error" */
/* eslint consistent-return: 0 */
import { useLayoutEffect } from 'react'

export default function useLockBodyScroll(e) {
	useLayoutEffect(
		() => {
			// get original value of body
			if (e === true) {
				const originalStyle = window.getComputedStyle(document.body).overflow
				// prevent scrolling on mount
				document.body.style.overflow = 'hidden'
				// re-enable scrolling when component unmounts
				return () => (document.body.style.overflow = originalStyle)
			}
		},
		[],
		// empty array to ensures effect is only run when mount and unmount
	)
}
