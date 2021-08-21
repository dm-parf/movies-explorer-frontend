export function renderLoading(flag, element, loadingValue, readyValue)
{
    if(flag)
    {
        element.innerHTML = loadingValue;
    } else
    {
        element.innerHTML = readyValue;
    }
}