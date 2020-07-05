export default {
    sorting(sortBy, list = []) {
        switch (sortBy) {
            case 'kasus_terbanyak':
                list.sort((a, b) => b.NewConfirmed - a.NewConfirmed);
                break;
            case 'kasus_terkecil':
                list.sort((a, b) => a.NewConfirmed - b.NewConfirmed);
                break;
            case 'meninggal_terbanyak':
                list.sort((a, b) => b.TotalDeaths - a.TotalDeaths);
                break;
            case 'meninggal_terkecil':
                list.sort((a, b) => a.TotalDeaths - b.TotalDeaths);
                break;
            case 'sembuh_terbanyak':
                list.sort((a, b) => b.TotalRecovered - a.TotalRecovered);
                break;
            case 'sembuh_terkecil':
                list.sort((a, b) => a.TotalRecovered - b.TotalRecovered);
                break;
        }
        return list;
    },
    findData(key, list = []) {
        return list.find(item => item.Country.toLowerCase() == key.toLowerCase());
    }
}