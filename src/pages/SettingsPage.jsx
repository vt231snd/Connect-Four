import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../components/Button/Button';
import { useNavigate } from 'react';

const schema = yup.object({
    player1Name: yup.string().required("Ім'я обов'язкове").max(10, "Макс 10 символів"),
    player2Name: yup.string().required("Ім'я обов'язкове").max(10, "Макс 10 символів"),
    winCondition: yup.number().min(3).max(5).required(),
}).required();

const SettingsPage = ({ onBack }) => {
    const savedSettings = JSON.parse(localStorage.getItem('gameSettings')) || {
        player1Name: 'Player 1',
        player2Name: 'Player 2',
        winCondition: 4
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: savedSettings,
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        localStorage.setItem('gameSettings', JSON.stringify(data));
        alert('Налаштування збережено!');
        onBack();
    };

    return (
        <div className="page-container">
            <h2>Налаштування гри</h2>
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

                <Button type="submit">Зберегти</Button>
                <Button variant="secondary" onClick={onBack} type="button">Назад</Button>
            </form>
        </div>
    );
};

export default SettingsPage;