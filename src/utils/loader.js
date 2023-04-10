export const loaderCustom = async (id) => {
    const res = await fetch('/jobs.json');
    const data = await res.json();

    const found = data.find(job => job.id == id);
    return found;
}