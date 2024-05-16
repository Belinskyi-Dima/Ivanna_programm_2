export default function findKcalItem(kkalListdal, id) {
    return kkalListdal.find( item => item.id === id);
}