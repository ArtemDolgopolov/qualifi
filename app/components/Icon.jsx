'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FaIcon({ 
  icon, 
  className = '',
  style = ''
}) {
  return (
    <FontAwesomeIcon 
      icon={icon} 
      className={`${className}`}
      style={style}
    />
  )
}