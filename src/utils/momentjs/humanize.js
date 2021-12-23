import moment from 'moment';

export const humanize = (unix) => {
    return moment.unix(unix).fromNow()
}