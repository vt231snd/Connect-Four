import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateSettings, toggleTheme } from '../store/settingsSlice';
import Button from '../components/Button/Button';

const schema = yup.object({
    player1Name: yup.string().required("Ім'я обов'язкове").max(10, "Макс 10 символів"),
    player2Name: yup.string().required("Ім'я обов'язкове").max(10, "Макс 10 символів"),
    winCondition: yup.number().min(3).max(5).required(),
}).required();

const SettingsPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const settings = useSelector((state) => state.settings);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: settings,
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        dispatch(updateSettings(data));
        alert('Налаштування збережено в Redux!');
        navigate('/');
    };

    return (
        <div className="page-container">
            <h2>Налаштування гри</h2>

            {/* Кнопка зміни теми */}
            <div style={{ marginBottom: '20px', width: '100%', maxWidth: '400px', display: 'flex', justifyContent: 'center' }}>
                <Button
                    variant="secondary"
                    onClick={() => dispatch(toggleTheme())}
                    type="button"
                >
                    {settings.theme === 'light' ? '🌙 Темна тема' : '☀️ Світла тема'}
                </Button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="settings-form">

                <div className="form-group">
                    <label>Гравець 1 (Червоні):</label>
                    <input {...register("player1Name")} />
                    <p className="error">{errors.player1Name?.message}</p>
                </div>

                <div className="form-group">
                    <label>Гравець 2 (Жовті):</label>
                    <input {...register("player2Name")} />
                    <p className="error">{errors.player2Name?.message}</p>
                </div>

                <div className="form-group">
                    <label>Скільки фішок в ряд для перемоги?</label>
                    <select {...register("winCondition")}>
                        <option value="3">3 (Легко)</option>
                        <option value="4">4 (Класика)</option>
                        <option value="5">5 (Важко)</option>
                    </select>
                </div>

                <div style={{ marginTop: '20px' }}>
                    <Button type="submit">Зберегти</Button>
                    <Button variant="secondary" onClick={() => navigate('/')} type="button">Назад</Button>
                </div>
            </form>
        </div>
    );
};

export default SettingsPage;