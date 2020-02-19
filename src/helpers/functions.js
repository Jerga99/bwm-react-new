
import moment from 'moment';

export const capitalize = value => {
  if (!value || typeof value !== 'string') { return ''; }

  // San Francisco
  return value
    .split(' ') // ['san', 'francisco']
    .map(word => word[0].toUpperCase() + word.slice(1)) // ['San', 'Francisco']
    .join(' ')  // San Francisco
}

export const formatDate = (date, dateFormat = 'YYYY/MM/DD') => {
  if (!date || typeof date !== 'string') { return ''; }
  
  return moment(date).format(dateFormat);
}