
import 'axios' from axios;

export const getAppParams = () => axios.get(`${API_BASE_URL}/applicationParameters`)
