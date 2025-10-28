import { investmentObjectivesService } from "../services/index.js";
import catchAsyncWithAuth from "../utils/catchAsyncWithAuth.js";
import httpStatus from 'http-status';
const createInvestmentObjectives = catchAsyncWithAuth(async (req, res) => {
    const investmentObjectives = await investmentObjectivesService.createInvestmentObjectives(req.body);
    res.status(httpStatus.CREATED).send(investmentObjectives);
});
const getInvestmentObjectivesById = catchAsyncWithAuth(async (req, res) => {
    const investmentObjectives = await investmentObjectivesService.getInvestmentObjectivesById(req.params.id);
    if (!investmentObjectives) {
        res.status(httpStatus.NOT_FOUND).send({ message: 'Investment objectives not found' });
        return;
    }
    res.send(investmentObjectives);
});
const getInvestmentObjectivesByClientId = catchAsyncWithAuth(async (req, res) => {
    const investmentObjectives = await investmentObjectivesService.getInvestmentObjectivesByClientId(req.params.clientId);
    if (!investmentObjectives) {
        res.status(httpStatus.NOT_FOUND).send({ message: 'Investment objectives not found for this client' });
        return;
    }
    res.send(investmentObjectives);
});
const updateInvestmentObjectivesById = catchAsyncWithAuth(async (req, res) => {
    const investmentObjectives = await investmentObjectivesService.updateInvestmentObjectivesById(req.params.id, req.body);
    res.send(investmentObjectives);
});
const updateInvestmentObjectivesByClientId = catchAsyncWithAuth(async (req, res) => {
    const investmentObjectives = await investmentObjectivesService.updateInvestmentObjectivesByClientId(req.params.clientId, req.body);
    res.send(investmentObjectives);
});
const deleteInvestmentObjectivesById = catchAsyncWithAuth(async (req, res) => {
    await investmentObjectivesService.deleteInvestmentObjectivesById(req.params.id);
    res.status(httpStatus.NO_CONTENT).send();
});
const deleteInvestmentObjectivesByClientId = catchAsyncWithAuth(async (req, res) => {
    await investmentObjectivesService.deleteInvestmentObjectivesByClientId(req.params.clientId);
    res.status(httpStatus.NO_CONTENT).send();
});
export default {
    createInvestmentObjectives,
    getInvestmentObjectivesById,
    getInvestmentObjectivesByClientId,
    updateInvestmentObjectivesById,
    updateInvestmentObjectivesByClientId,
    deleteInvestmentObjectivesById,
    deleteInvestmentObjectivesByClientId
};
